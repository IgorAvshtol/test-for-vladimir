import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';

import { updateUsersListIsCheckedForAll } from '@redux/actions';
import { selectUsersListLength, selectCheckedUsersNumber } from '@redux/selectors';
import { ContainerMedium, FetchError } from '@components';

import { debounce } from '@utils/utils';
import { SearchBarBlock } from '@components/SearchBarBlock';



const UsersListHeader: FunctionComponent = () => {
  const dispatch = useDispatch();

  const usersListLength = useSelector(selectUsersListLength);
  const checkedUsersNumber = useSelector(selectCheckedUsersNumber);

  const selectedNumberRatio = `(${checkedUsersNumber}/${usersListLength})`;
  // if all users are checked
  const isChecked = usersListLength === checkedUsersNumber;

  // let's debounce this call as it may take time to execute if we click many times
  const handleChecked = debounce(
      () => {
        if (checkedUsersNumber < usersListLength) {
          // select all then
          dispatch(updateUsersListIsCheckedForAll(true));
        } else {
          // deselect all
          dispatch(updateUsersListIsCheckedForAll(false));
        }
      }
  );

  return (
      <>
        <AppBar position="fixed" color="default">
          <ContainerMedium>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    onChange={handleChecked}
                    tabIndex={-1}
                    disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={`Select all ${selectedNumberRatio}`}/>
              <SearchBarBlock/>
              <FetchError/>

              <ListItemText
                  primary={'React test App'}
                  primaryTypographyProps={{
                    align: 'right',
                    variant: 'h6',
                  }}
              />
            </ListItem>
          </ContainerMedium>
        </AppBar>

        <Toolbar/>
      </>
  );
};

export default UsersListHeader;
