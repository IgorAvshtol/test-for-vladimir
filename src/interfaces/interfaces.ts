import { ActionTypes } from '@redux/actions';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  age: number;
  /* flag used to detect whether user is selected in list */
  isChecked?: boolean;
}

export interface IAddNewUser {
  firstName: string;
  surname: string;
  age: number;
}

export namespace ActionsInterfaces {
  export interface IUpdateUsersList {
    type: ActionTypes.UPDATE_USERS_LIST;
    payload: IUser[];
  }

  export interface IFetchUsersList {
    type: ActionTypes.FETCH_USERS;
    /* number of users to fetch */
    payload: number;
  }

  export interface IUpdateUserInUsersList {
    type: ActionTypes.UPDATE_USER_IN_LIST;
    payload: IUser;
  }

  export interface IUpdateFetchError {
    type: ActionTypes.UPDATE_FETCH_ERROR,
    payload: FetchError,
  }

  export interface IAddUser {
    type: ActionTypes.ADD_USER,
    payload: IAddNewUser,
  }

  export interface ISearchUser {
    type: ActionTypes.SEARCH_USER,
    payload: string,
  }
}

export type FetchError = null | string;

export interface IAppState {
  fetchError: null | string;
  usersList: IUser[];
}
