import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { selectFetchError } from '@redux/selectors';

const FetchError: FunctionComponent = () => {
    const fetchError = useSelector(selectFetchError);

    if (fetchError) {
        return (
            <Typography
                align="center"
                variant="body2"
                color="error"
            >
                {fetchError}
            </Typography>
        );
    }

    return <React.Fragment />;
};

export default FetchError;
