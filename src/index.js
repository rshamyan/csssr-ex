import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search/Search';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import reducer from './search/reducers';
import SearchSagas from './search/sagas';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import rootSaga from './sagas';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleWare = createSagaMiddleware(...SearchSagas)

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleWare)
  // other store enhancers if any
);

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
}, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Search />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

sagaMiddleWare.run(rootSaga);

// registerServiceWorker();
