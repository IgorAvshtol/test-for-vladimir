import React, {
    FunctionComponent,
    useEffect,
    useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import { fetchUsersList } from '@redux/actions';
import { selectUsersList } from '@redux/selectors';
import { Loader, UserLine } from '@components';

const useUsersListStyles = makeStyles(
    (theme: Theme) => createStyles({
        usersList: {
            width: '100%',
            height: `calc(100vh - ${theme.spacing(8 * 2)}px)`,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const UsersList: FunctionComponent = () => {
    const classes = useUsersListStyles();

    const tableRef = useRef<FixedSizeList>(null);

    const usersList = useSelector(selectUsersList);
    const dispatch = useDispatch();

    // did mount effect
    useEffect(() => {
        // YES! we will work with list of 5000 elements!
        dispatch(fetchUsersList(5000));
        // custom  event handler
        const scrollTableTopHandler = () => {
            tableRef.current!.scrollTo(0);
        };
        document.addEventListener('scrolltabletop', scrollTableTopHandler);
        // it's not necessary to unsubscribe as we use this listener for the entire app lifetime
        // but anyway
        () => document.removeEventListener('scrolltabletop', scrollTableTopHandler);
    }, []);

    const renderLine = ({ index, style }: ListChildComponentProps) => {
        const user = usersList[index];

        return (
            <UserLine
                key={user.id}
                style={style}
                user={user}
            />
        );
    };

    if (usersList.length === 0) {
        return <Loader />;
    }

    return (
        <div className={classes.usersList}>
            <AutoSizer>
                {({ height, width }) => (
                    <FixedSizeList
                        ref={tableRef}
                        height={height}
                        width={width}
                        itemSize={46}
                        itemCount={usersList.length}
                    >
                        {renderLine}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    );
};

export default UsersList;
