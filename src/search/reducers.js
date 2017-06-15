import * as Actions from './actions'; 

const searchReposReducer = (state, action) => {
    switch(action.type) {
        case Actions.SEARCH_ISSUES_REQUESTED:
            return Object.assign({}, state, {
                issues: {
                    isFetching: true
                },
                user: {
                    name: action.user,
                    repo: action.repo
                }
            });
        case Actions.SEARCH_ISSUES_SUCCEDED:
            const {ids: allIds, byId, next,
                first, last, prev = state.issues.current, current} = action.issues;
            return Object.assign({}, state, {
                issues: {
                    isFetching: false,
                    next,
                    first,
                    last,
                    prev,
                    current,
                    byId,
                    allIds
                }
            });
        case Actions.SEARCH_ISSUES_FAILED:
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