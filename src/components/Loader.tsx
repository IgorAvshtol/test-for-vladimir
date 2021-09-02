import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(
    () => createStyles({
        wrapper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
);

const Loader: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CircularProgress />
        </div>
    );
};

export default Loader;
