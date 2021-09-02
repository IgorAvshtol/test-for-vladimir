import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { IUser } from '@interfaces/interfaces';
import { setUserInUsersListIsChecked } from '@redux/actions';

const useUserLineStyles = makeStyles(
    (theme: Theme) => createStyles({
        listIem: {
            borderBottom: `solid 1px ${theme.palette.divider}`,
        },
        lineContentContainer: {
            width: '100%',
            display: 'flex',
        },
        lineContentElement: {
            flexGrow: 1,
            flexBasis: 80,
        }
    }),
);

interface IUserLineProps {
    style?: React.CSSProperties;
    user: IUser;
}

// yet it's just a bolierplate
const UserLine: FunctionComponent<IUserLineProps> = ({ style, user }) => {
    const classes = useUserLineStyles();

    const { id, name, surname, age, isChecked } = user;
    const dispatch = useDispatch();

    const handleChange = () => (
        dispatch(setUserInUsersListIsChecked(id, !isChecked))
    );

    return (
        <ListItem
            button
            className={classes.listIem}
            style={style}
        >
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    onChange={handleChange}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>

            <div className={classes.lineContentContainer}>
                {[name, surname, age].map(prop => (
                    <ListItemText
                        key={`${id}-prop-${prop}`}
                        className={classes.lineContentElement}
                        primary={`${prop} ${(typeof prop === 'number') ? ' y.o.' : ''}`}
                    />
                ))}
            </div>
        </ListItem>
    );
};

export default UserLine;
