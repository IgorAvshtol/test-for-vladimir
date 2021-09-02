import { ThunkAction } from 'redux-thunk';

import {
  IUser,
  IAppState,
  ActionsInterfaces,
  FetchError,
} from '@interfaces/interfaces';
import { fetchUsers } from '@services/usersService';
import { isDev } from '@utils/utils';

// may be splitted to constants.ts later
export enum ActionTypes {
  UPDATE_USERS_LIST = 'UPDATE_USERS_LIST',
  FETCH_USERS = 'FETCH_USERS',
  UPDATE_USER_IN_LIST = 'UPDATE_USER_IN_USERS_LIST',
  UPDATE_FETCH_ERROR = 'UPDATE_FETCH_ERROR',
  ADD_USER = 'ADD_USER',
  SEARCH_USER = 'SEARCH_USER'
}

export const updateFetchEroor = (fetchError: FetchError): ActionsInterfaces.IUpdateFetchError => ({
  type: ActionTypes.UPDATE_FETCH_ERROR,
  payload: fetchError,
});

export const updateUsersList = (usersList: IUser[]): ActionsInterfaces.IUpdateUsersList => ({
  type: ActionTypes.UPDATE_USERS_LIST,
  payload: usersList,
});

export const addUser = (firstName: string, surname: string, age: number): ActionsInterfaces.IAddUser => ({
  type: ActionTypes.ADD_USER,
  payload: {firstName, surname, age},
});

export const searchUser = (searchName: string): ActionsInterfaces.ISearchUser => ({
  type: ActionTypes.SEARCH_USER,
  payload: searchName,
});


/**
 * @param user - changed user (if user with this id doesn't exist in store -> nothing will happen)
 */
export const updateUserInUsersList = (user: IUser): ActionsInterfaces.IUpdateUserInUsersList => ({
  type: ActionTypes.UPDATE_USER_IN_LIST,
  payload: user,
});

// side effect to fetch users
export const fetchUsersList = (
    number: number,
): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList | ActionsInterfaces.IUpdateFetchError> => {
  return async (dispatch) => {
    try {
      const usersList = await fetchUsers(number);

      dispatch(updateUsersList(usersList));
    } catch (e) {
      if (isDev()) {
        console.log(e);
      }

      dispatch(updateFetchEroor('Unable to fetch data: network connection problems'));
    }
  };
};

export const updateUsersListIsCheckedForAll = (isChecked: boolean): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUsersList> => (
    async (dispatch, getState) => {
      const {usersList: prevUsersList} = getState();

      const usersList = prevUsersList.map(user => ({...user, isChecked}));

      dispatch(updateUsersList(usersList));
    }
);

/**
 * @param id - changed user (if user with this id doesn't exist in store -> nothing will happen)
 * @param isChecked - new isChecked value
 */
export const setUserInUsersListIsChecked = (userId: string, isChecked: boolean): ThunkAction<Promise<void>, IAppState, null, ActionsInterfaces.IUpdateUserInUsersList> => (
    async (dispatch, getState) => {
      const {usersList: prevUsersList} = getState();

      prevUsersList.map(prevUser => {
        // we can use it since this are UUIDs
        if (prevUser.id === userId) {
          dispatch(updateUserInUsersList({...prevUser, isChecked}));
        }
      });
    }
);
