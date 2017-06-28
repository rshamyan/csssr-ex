import {combineReducers} from 'redux';

import searchReducers, {userReducer} from '../search/reducers';
import issueFormsReducers from '../issues-form/reducers';

export default combineReducers({
    issues: searchReducers,
    repos: issueFormsReducers,
    user: userReducer
});