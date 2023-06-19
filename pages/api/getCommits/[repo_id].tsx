import {NextApiRequest, NextApiResponse} from "next";
import {Octokit} from "@octokit/rest";

export default async function getRepo(req: NextApiRequest, res: NextApiResponse) {
    const { query} = req;
    const repoId = query.repo_id;
    console.log(repoId);

    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const commits: any[] = [];
    let page = 1;
    let response = await octokit.repos.listCommits({
        owner: "PuckyEU",
        repo: `${repoId}`,
        per_page: 100,
        page: page,
    });

    // Fetch all pages of commits
    while (response.data.length > 0) {
        commits.push(...response.data);
        page++;
        response = await octokit.repos.listCommits({
            owner: "PuckyEU",
            repo: `${repoId}`,
            per_page: 100,
            page: page,
        });
    }
    return res.status(200).json(commits);
}