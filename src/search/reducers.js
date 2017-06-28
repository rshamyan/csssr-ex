import { SEARCH_ISSUES_REQUESTED, SEARCH_ISSUES_SUCCEDED ,
    SEARCH_ISSUES_FAILED} from './actions';

const searchReposReducer = (state = {}, action) => {
    switch(action.type) {
        case SEARCH_ISSUES_REQUESTED:
            return Object.assign({}, state, {
                ...state.issues,
                isFetching: true
            });
        case SEARCH_ISSUES_SUCCEDED:
            return Object.assign({}, state, {
                isFetching: false,
                ...action.issues
            });
        case SEARCH_ISSUES_FAILED:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }
}

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_ISSUES_REQUESTED:
            return Object.assign({}, state, {
                name: action.user.name,
                repo: action.user.repo
            });
        default:
            return state;
    }
}

export default searchReposReducer;
