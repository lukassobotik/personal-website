import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";

export default async function getLicense(req: NextApiRequest, res: NextApiResponse) {
    const { query } = req;
    const repoId = query.repo_id;
    console.log(repoId);

    const octokit = new Octokit({
        auth: process.env.GITHUB_AUTH_TOKEN,
    });

    try {
        const { data } = await octokit.repos.getContent({
            owner: "lukassobotik",
            repo: `${repoId}`,
            path: "LICENSE",
        });

        // @ts-ignore
        if (data.encoding === "base64") {
            // @ts-ignore
            const readmeContents = Buffer.from(data.content, "base64").toString("utf-8");
            const newData = {
                ...data,
                readmeContents: readmeContents,
            };
            return res.status(200).json(newData);
        }
    } catch (error) {
        console.error("Failed to retrieve README:", error);
        return res.status(500).json({ error: "Failed to retrieve README" });
    }
}