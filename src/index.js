import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search/Search';
import './index.css';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store/configureStore';


ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Search />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
