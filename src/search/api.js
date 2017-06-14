const apiOrigin = `https://api.github.com`;

export async function getIssues(user, repo) {
    const res = await fetch(`${apiOrigin}/repos/${user}/${repo}/issues`);
    return await res.json();
}