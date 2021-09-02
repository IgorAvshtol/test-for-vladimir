import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import { IUser } from '@interfaces/interfaces';
import { setUserInUsersListIsChecked } from '@redux/actions';

const useCheckedUserStyles = makeStyles(
    (theme: Theme) => createStyles({
        chip: {
            margin: `0 ${theme.spacing(0.25)}px`,
        },
    }),
);

interface ICheckedUser {
    user: IUser;
}

const CheckedUser: FunctionComponent<ICheckedUser> = ({ user }) => {
    const classes = useCheckedUserStyles();

    const { id: userId, name } = user;

    const dispatch = useDispatch();

    const handleDelete = () => (
        dispatch(setUserInUsersListIsChecked(userId, false))
    );

    return (
        <Chip
            label={name}
            className={classes.chip}
            onDelete={handleDelete}
            variant="outlined"
            size="small"
        />
    );
};

export default CheckedUser;
