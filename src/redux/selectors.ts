import { createSelector } from 'reselect';

import { IAppState } from '@interfaces/interfaces';

export const selectFetchError = ({ fetchError }: IAppState) => fetchError;

export const selectUsersList = ({ usersList }: IAppState) => usersList;

export const selectUsersListLength = createSelector(
    selectUsersList,
    usersList => usersList.length,
);

export const selectCheckedUsers = createSelector(
    selectUsersList,
    usersList => usersList.filter(({ isChecked }) => isChecked),
);

export const selectCheckedUsersNumber = createSelector(
    selectCheckedUsers,
    checkedUsers => checkedUsers.length,
);
