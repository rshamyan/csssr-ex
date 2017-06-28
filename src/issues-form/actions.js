export const GET_REPOS_REQUESTED = 'GET_REPOS_REQUESTED';
export const GET_REPOS_SUCCEDED = 'GET_REPOS_SUCCEDED';
export const GET_REPOS_FAILED = 'GET_REPOS_FAILED';

export const getRepos = (username, repo) => ({
    type: GET_REPOS_REQUESTED,
    username,
    repo
});