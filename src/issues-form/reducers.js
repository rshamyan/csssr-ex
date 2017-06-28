import {GET_REPOS_REQUESTED, GET_REPOS_SUCCEDED,
    GET_REPOS_FAILED} from './actions';

export const getReposReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_REPOS_REQUESTED:
            return Object.assign({}, state, {
                isFetching: true
            });
        case GET_REPOS_FAILED:
            return Object.assign({}, state, {
                isFetching: false
            });
        case GET_REPOS_SUCCEDED:
            return Object.assign({}, state, {
                isFetching: false,
                ...action.repos
            });
        default:
            return state;
    }
};

export default getReposReducer;