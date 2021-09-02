import React, { ChangeEvent, useState } from 'react';

import { createStyles, fade, makeStyles, Theme, } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fetchUsersList, searchUser } from '@redux/actions';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    })
);


export function SearchBarBlock() {

  const [value, setValue] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const dispatch = useDispatch();

  const classes = useStyles();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const startSearch = () => {
    dispatch(searchUser(value));
    setSearch('stop search!');
  };

  const stopSearch = () => {
    dispatch(fetchUsersList(5000));
    setSearch('');
  };

  return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={value}
            inputProps={{'aria-label': 'search '}}
            onChange={onChangeHandler}
        />
        {!search
            ? <Button onClick={startSearch}>Search</Button>
            : <Button onClick={stopSearch}>Back</Button>
        }
      </div>
  );
}