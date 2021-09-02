import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

import { selectCheckedUsers } from '@redux/selectors';
import { CheckedUser } from '@components/footer';

const useCheckedUsersModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        contentWrapper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(1, 2, 4),
            minHeight: 300,
            minWidth: 200,
        },
    }),
);

interface ICheckedUsersModal {
    isOpened: boolean;
    onClose: () => void;
}

const CheckedUsersModal: FunctionComponent<ICheckedUsersModal> = ({ isOpened, onClose }) => {
    const classes = useCheckedUsersModalStyles();

    const checkedUsers = useSelector(selectCheckedUsers);

    const renderLine = ({ index, style }: ListChildComponentProps) => {
        const user = checkedUsers[index];

        return (
            <div
                key={user.id}
                style={style}
            >
                <CheckedUser user={user} />
            </div>
        );
    };

    return (
        <Modal
            className={classes.modal}
            open={isOpened}
            onClose={onClose}
            closeAfterTransition
        >
            <Fade in={isOpened}>
                <div className={classes.contentWrapper}>
                    <Typography
                        align="center"
                        variant="body1"
                    >
                        Click outside to close
                    </Typography>

                    <AutoSizer>
                        {({ height, width }) => (
                            <FixedSizeList
                                height={height}
                                width={width}
                                itemSize={46}
                                itemCount={checkedUsers.length}
                            >
                                {renderLine}
                            </FixedSizeList>
                        )}
                    </AutoSizer>
                </div>
            </Fade>
        </Modal>
    );
};

export default CheckedUsersModal;
