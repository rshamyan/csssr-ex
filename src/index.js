import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search/Search';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import reducer from './search/reducers';
import SearchSagas from './search/sagas';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = createStore(reducer, {
    issues: {
        isFetching: false
    },
    user: {
        name: null,
        repo: null
    },
    repos: {

    }
}, applyMiddleware(createSagaMiddleware(...SearchSagas)));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Search />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
