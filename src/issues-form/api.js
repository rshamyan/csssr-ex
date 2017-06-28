const apiOrigin = `https://api.github.com`;

const mapRepos = (repos) => {
    const allIds = [];
    const byId = {};
    for (let {id, name} of repos) {
        allIds.push(id.toString());
        byId[id.toString()] = ({
            id, name
        });
    }
    return {allIds, byId};
}

export async function getRepos(user, repo,
        url=`${apiOrigin}/search/repositories?q=${repo}+user:${user}`) {
    const res = await fetch(url);
    const json = await res.json();
    return mapRepos(json.items);
}