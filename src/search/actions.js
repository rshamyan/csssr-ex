export const SEARCH_ISSUES_REQUESTED = 'SEARCH_ISSUES_REQUESTED';
export const SEARCH_ISSUES_FAILED = 'SEARCH_ISSUES_FAILED';
export const SEARCH_ISSUES_SUCCEDED = 'SEARCH_ISSUES_SUCCEDED';


export const searchIssues = (gitUser, repo, url) => ({
    type: SEARCH_ISSUES_REQUESTED,
    user: {
        name: gitUser,
        repo,
    },
    url
});
