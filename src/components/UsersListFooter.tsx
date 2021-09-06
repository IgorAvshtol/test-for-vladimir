import React, { FunctionComponent, lazy, Suspense, useState, } from 'react';
import { useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { selectCheckedUsers } from '@redux/selectors';
import { ContainerMedium, Loader } from '@components';
import { CheckedUser } from '@components/footer';
import { scrollTableTopEvent } from '@utils/utils';
import { Toolbar } from '@material-ui/core';
import { AddUserForm } from '@components/AddUserForm';

const CheckedUserModal = lazy(
    () => import('@components/footer/CheckedUsersModal')
);

const useUserListFooterStyles = makeStyles(
    (theme: Theme) => createStyles({
      footer: {
        top: 'auto',
        bottom: 0,
      },
      footerIcons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
      },
      fabButton: {
        top: -20,
      },
      addButton: {
        top: -20,
      },
      contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        height: theme.spacing(8),
      },
      chip: {
        margin: `0 ${theme.spacing(0.25)}px`,
      },
    }),
);

const ScrollTopFab: FunctionComponent = () => {
  const classes = useUserListFooterStyles();
  // we'll fire event that will move us to the table top
  const handleClick = () => (
      document.dispatchEvent(scrollTableTopEvent)
  );

  return (
      <Tooltip
          title="Scroll to the table top"
          placement="top"
      >
        <Fab
            color="primary"
            size="small"
            onClick={handleClick}
            className={classes.fabButton}
        >
          <KeyboardArrowUpIcon/>
        </Fab>
      </Tooltip>

  );
};

const AddUsersFab: FunctionComponent = () => {

  const [showForm, setShowForm] = useState(false);

  const classes = useUserListFooterStyles();

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
      <div>
        <Tooltip
            title="Add new users"
            placement="top"
        >
          <Fab
              color="primary"
              size="small"
              onClick={handleShowForm}
              className={classes.addButton}
          >
            {!showForm ? <AddIcon/> : <CloseIcon/>}
          </Fab>
        </Tooltip>
        {showForm && <AddUserForm/>}
      </div>
  );
};

const UsersListFooter: FunctionComponent = () => {
  const classes = useUserListFooterStyles();

  const [isModalOpened, setIsModalOpened] = useState(false);

  let checkedUsers = useSelector(selectCheckedUsers);
  let isOverlapping = false;

  if (checkedUsers.length > 3) {
    isOverlapping = true;
    checkedUsers = checkedUsers.slice(0, 3);
  }

  const handleModalOpen = () => setIsModalOpened(true);
  const handleModalClose = () => setIsModalOpened(false);

  return (
      <>
        {isModalOpened && (
            <Suspense fallback={<Loader/>}>
              <CheckedUserModal
                  isOpened={isModalOpened}
                  onClose={handleModalClose}
              />
            </Suspense>
        )}

        <Toolbar/>

        <AppBar
            position="fixed"
            color="default"
            className={classes.footer}
        >
          <div className={classes.footerIcons}>
            <ScrollTopFab/>
            <AddUsersFab/>
          </div>

          <ContainerMedium>
            <div className={classes.contentWrapper}>
              {checkedUsers.map(user => (
                  <CheckedUser
                      key={user.id}
                      user={user}
                  />
              ))}

              {isOverlapping && (
                  <Chip
                      label="See all"
                      onClick={handleModalOpen}
                      className={classes.chip}
                      color="primary"
                      size="small"
                  />
              )}
            </div>
          </ContainerMedium>
        </AppBar>
      </>
  );
};

export default UsersListFooter;
