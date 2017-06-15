const apiOrigin = `https://api.github.com`;

const mapIssues = (issues) => {
    const ids = [];
    const byId = {};
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
    return {ids, byId};
}

export async function getIssues(user, repo) {
    const res = await fetch(`${apiOrigin}/repos/${user}/${repo}/issues`);
    const issues = await res.json();
    return mapIssues(issues);
}