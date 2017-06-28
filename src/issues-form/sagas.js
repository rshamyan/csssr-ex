import {GET_REPOS_REQUESTED, GET_REPOS_SUCCEDED,
    GET_REPOS_FAILED} from './actions';

import { getRepos } from './api';

import { call, put, takeLatest, all } from 'redux-saga/effects';

function* searchRepos(action) {
    try {
        const repos = yield call(getRepos, action.username, action.repo);
        yield put({
            type: GET_REPOS_SUCCEDED,
            repos
        })
    }
    catch (e) {
        console.warn(e);
        yield put({
            type: GET_REPOS_FAILED
        })
    }
}

function* searchReposSaga() {
    yield takeLatest(GET_REPOS_REQUESTED, searchRepos);
}

export default function* () {
    yield all([searchReposSaga()]);
}