import { context, getOctokit } from "@actions/github";
import { getInput, setFailed } from "@actions/core";

const token = getInput("Token");
const repoName = getInput("RepoName");
const ownerName = getInput("OwnerName");
const octokit = getOctokit(token);

export const getAllIssues = async () => {
    let url = `GET /repos/${ownerName}/${repoName}/issues`

    return octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        labels: "response"
    })
}

const run = async () => {
    console.log("Running");
    const issues = await getAllIssues();
    console.log(issues.data);
}

run();