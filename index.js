import { context, getOctokit } from "@actions/github";
import { getInput, setFailed } from "@actions/core";

const token = getInput("Token");
const repoName = getInput("RepoName");
const ownerName = getInput("OwnerName");
const labelName = getInput("LabelName");
const octokit = getOctokit(token);

export const getAllIssues = async () => {
    let url = `GET /repos/${ownerName}/${repoName}/issues`

    return octokit.request(url, {
        owner: ownerName,
        repo: repoName,
        labels: labelName
    })
}

const run = async () => {
    const issues = await getAllIssues();
    console.log(issues.data);
}

run();