const { Octokit } = require("@octokit/rest");

export default async function Github(req : any, res : any) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'PuckyEU',
        repo: 'MyFavMovies',
    })
    console.log(data);
    return res.status(200).json(data);
}