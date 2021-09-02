import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from '@redux/store';
import {
    UsersList,
    UsersListHeader,
    UsersListFooter,
    ContainerMedium,
} from '@components';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <CssBaseline />

        <UsersListHeader />

        <ContainerMedium>
            <UsersList />
        </ContainerMedium>

        <UsersListFooter />
    </Provider>
);

export default App;
