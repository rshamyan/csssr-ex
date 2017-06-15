import * as Actions from './actions';
import * as Api from './api';

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* fetchIssues(action) {
    try {
        const issues = yield call(Api.getIssues, action.user.name, action.user.repo);
        yield put({
            type: Actions.SEARCH_ISSUES_SUCCEDED,
            issues
        })
    }
    catch (e) {
        yield put({
            type: Actions.SEARCH_ISSUES_FAILED
        })
    }
}

function* fetchIssuesSaga() {
    yield takeLatest(Actions.SEARCH_ISSUES_REQUESTED, fetchIssues);
}

export default function* () {
    yield all([fetchIssuesSaga()]);
}