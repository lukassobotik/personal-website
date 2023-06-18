import {NextApiRequest, NextApiResponse} from "next";
import {Octokit} from "@octokit/rest";

export default async function getRepo(req: NextApiRequest, res: NextApiResponse) {
    const { query} = req;
    const repoId = query.repo_id;
    console.log(repoId);

    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'PuckyEU',
        repo: `${repoId}`,
    })

    return res.status(200).json(data);
}