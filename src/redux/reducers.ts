import { combineReducers } from 'redux';

import {
  IUser,
  ActionsInterfaces,
  FetchError,
} from '@interfaces/interfaces';
import { ActionTypes } from '@redux/actions';
import { v4 as uuid4 } from 'uuid';

const fetchErrorReducer = (
    state = null,
    action: ActionsInterfaces.IUpdateFetchError,
): FetchError => {
  switch (action.type) {
    case ActionTypes.UPDATE_FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const usersListReducer = (
    state: IUser[] = [],
    action: ActionsInterfaces.IUpdateUsersList | ActionsInterfaces.IUpdateUserInUsersList | ActionsInterfaces.IAddUser | ActionsInterfaces.ISearchUser,
): IUser[] => {
  switch (action.type) {
    case ActionTypes.UPDATE_USERS_LIST:
      return action.payload;
    case ActionTypes.UPDATE_USER_IN_LIST:
      const {payload: changedUser} = action;
      // we cant modify state object itself since redux makes shallow comparison
      const newUsersList = [...state];
      // iterate over usersList and find changed one
      state.map((user, index) => {
        // we can use it since this are UUIDs
        if (user.id === changedUser.id) {
          newUsersList.splice(index, 1, changedUser);
        }
      });
      return newUsersList;
    case ActionTypes.ADD_USER:
      return [...state, {
        id: uuid4(),
        name: action.payload.firstName,
        surname: action.payload.surname,
        age: action.payload.age,
        isChecked: false
      }];
    case ActionTypes.SEARCH_USER:
      const UsersList = [...state];
      const UsersSearchNames = UsersList.filter(users => users.name === action.payload);
      return UsersSearchNames;
    default:
      return state;
  }
};

export default combineReducers({
  fetchError: fetchErrorReducer,
  usersList: usersListReducer,
});
