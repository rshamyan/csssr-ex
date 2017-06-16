const apiOrigin = `https://api.github.com`;

const mapIssues = (issues, link, current) => {
    const allIds = [];
    const byId = {};
    const links = link ? parseLink(link) : {};
    for (let {
                id,
                number,
                title,
                created_at: createdAt,
                user: {
                    avatar_url: avatarUrl, login
                }
            } of issues) {
        allIds.push(id.toString());
        byId[id.toString()] = ({
            id, number, createdAt, title,
            user: {avatarUrl, login}
        });
    }
    return {allIds, byId, pagination: {current, ...links}};
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

export async function getIssues(user, repo, perPage=10,
        url=`${apiOrigin}/repos/${user}/${repo}/issues?per_page=${perPage}`) {
    const res = await fetch(url);
    const issues = await res.json();
    if (!(issues instanceof Array)) {
        throw Error(`Not array ${res.status}`);
    }
    return mapIssues(issues, res.headers.get('Link'), url);
}
