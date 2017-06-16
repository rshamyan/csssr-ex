import { SEARCH_ISSUES_REQUESTED, SEARCH_ISSUES_SUCCEDED ,
    SEARCH_ISSUES_FAILED} from './actions';

const searchReposReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_ISSUES_REQUESTED:
            return Object.assign({}, state, {
                issues: {
                    ...state.issues,
                    isFetching: true
                },
                user: {
                    name: action.user.name,
                    repo: action.user.repo
                }
            });
        case SEARCH_ISSUES_SUCCEDED:
            return Object.assign({}, state, {
                issues: {
                    isFetching: false,
                    ...action.issues
                }
            });
        case SEARCH_ISSUES_FAILED:
            return Object.assign({}, state, {
                issues: {
                    isFetching: false
                }
            });
        default:
            return state;
    }
}

export default searchReposReducer;
