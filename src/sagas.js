import searchSagas from './search/sagas';
import { fork } from 'redux-saga/effects';


export default function* root() {
  yield fork(searchSagas[0])
}