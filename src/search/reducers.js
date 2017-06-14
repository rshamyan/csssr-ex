import * as Actions from './actions'; 

const searchReposReducer = (state, action) => {
    switch(action.type) {
        case Actions.SEARCH_ISSUES_REQUESTED:
            return Object.assign({}, state, {
                issues: {
                    isFetching: true
                }
            });
        case Actions.SEARCH_ISSUES_SUCCEDED:
            return Object.assign({}, state, {
                issues: {
                    isFetching: false,
                    pagesCount: action.pagesCount,
                    currentPage: action.currentPage,
                    byId: {

                    },
                    allIds: []
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