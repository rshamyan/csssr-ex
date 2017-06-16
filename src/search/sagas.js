import { SEARCH_ISSUES_SUCCEDED, SEARCH_ISSUES_FAILED,
    SEARCH_ISSUES_REQUESTED } from './actions';
import { getIssues } from './api';

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* fetchIssues(action) {
    try {
        const issues = yield call(getIssues, action.user.name,
            action.user.repo, undefined, action.url);
        yield put({
            type: SEARCH_ISSUES_SUCCEDED,
            issues
        })
    }
    catch (e) {
        console.warn(e);
        yield put({
            type: SEARCH_ISSUES_FAILED
        })
    }
}

function* fetchIssuesSaga() {
    yield takeLatest(SEARCH_ISSUES_REQUESTED, fetchIssues);
}

export default function* () {
    yield all([fetchIssuesSaga()]);
}
