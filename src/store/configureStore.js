import reducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleWare = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleWare)
  // other store enhancers if any
);

const store = createStore(reducer, 
// {
//     issues: {
//         isFetching: false
//     },
//     user: {
//         name: null,
//         repo: null
//     },
//     repos: {

//     }
// },
enhancer);

sagaMiddleWare.run(rootSaga);

export default store;