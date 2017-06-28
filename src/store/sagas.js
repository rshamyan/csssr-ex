import searchSagas from '../search/sagas';
import issuesFormSagas from '../issues-form/sagas';
import { fork } from 'redux-saga/effects';


export default function* root() {
  yield fork(searchSagas);
  yield fork(issuesFormSagas);
}