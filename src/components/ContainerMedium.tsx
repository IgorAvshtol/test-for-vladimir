import React, { FunctionComponent } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useContainerStyles = makeStyles(
    () => createStyles({
        usersListContainer: {
            padding: 0,
        },
    }),
);

interface IContainerMediumProps {
    children: React.ReactNode | React.ReactNodeArray
}

const ContainerMedium: FunctionComponent<IContainerMediumProps> = ({ children }: IContainerMediumProps) => {
    const classes = useContainerStyles();

    return (
        <Container
            maxWidth="md"
            className={classes.usersListContainer}
        >
            {children!}
        </Container>
    );
};

export default ContainerMedium;
