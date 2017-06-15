const apiOrigin = `https://api.github.com`;

const mapIssues = (issues, link, current) => {
    const ids = [];
    const byId = {};
    const {next, last, first, prev} = parseLink(link);
    for (let {
                id,
                number,
                created_at: createdAt,
                title,
                user: {
                    avatar_url: avatarUrl, login
                }
            } of issues) {
        ids.push(id.toString());
        byId[id.toString()] = ({
            id, number, createdAt: new Date(createdAt), title, user: {avatarUrl, login}
        });
    }
    return {ids, byId, next, last, first, prev, current};
}

const parseLink = (link) => {
    const res = {};
    for (let item of link.split(',')) {
        let [url, rel] = item.split(';');
        url = /<(.+)>/.exec(url)[1];
        rel = /rel="(.+)"/.exec(rel)[1];
        res[rel] = url;
    }
    return res;
}

export async function getIssues(user, repo, perPage=30,
        url=`${apiOrigin}/repos/${user}/${repo}/issues?per-page=${perPage}`) {
    const res = await fetch(url);
    const issues = await res.json();
    return mapIssues(issues, res.headers.get('Link'), url);
}