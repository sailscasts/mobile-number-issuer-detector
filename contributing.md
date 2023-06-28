 # Contributing to MIND

Welcome to the Community Project! Thank you for your interest in contributing. We value your contributions and want to ensure the contribution process is easy and effective for everyone involved. Please take a moment to read the guidelines below before submitting your pull request.

## Project Description

This project is a tool that detects the ISP of a Nigerian mobile number. It helps users identify the network provider associated with a given mobile number.

## Contribution Workflow

At MIND, we adhere to the [Gitflow branching model](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Our contribution workflow involves utilizing the develop branch as the central branch for active development. Therefore, we request that all Pull Requests be targeted towards the develop branch instead of the main branch. This approach ensures the stability of our main branch while allowing continuous development on the develop branch.

## Pull Request Etiquette

To ensure a smooth review process, please follow these guidelines:

- Fork and clone (https://help.github.com/articles/fork-a-repo) the repository into your own account. If you cloned the repository some time ago, it's recommended to fetch the latest changes from the upstream repository. You can do this by running the following commands or using the github UI: 
  - `git checkout develop` and `git pull upstream develop`
  - (https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

- In your forked repository, create a new branch: `git checkout -b <my-branch> develop`
- Make your changes/fixes.
- Commit your code with a descriptive commit message [using "Conventionalcommits"](https://www.conventionalcommits.org/en/v1.0.0/).
- Push your branch to GitHub: `git push origin <my-branch>`
- [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description matching the issue you intend to solve.

> ⚠️IMPORTANT **Note**
>
> ** To facilitate a smoother review process, we kindly ask you to use the following format for the Pull Request title:`[chore]`, `[feat]`, or `[fix]`, followed by a descriptive title. For instace, a feat-related change could have a title like `[feat] setup pasword reset`. This helps us categorize and understand the nature of the changes made in each PR..**

   - Link the issue you have resolved in the Pull Request Template using the following syntax:
   - If your Pull Request fixes issue #25, add `Fixes #25` to the description.
   - If your Pull Request addresses multiple issues, list them using the same syntax (`Fixes #23, Fixes #15`) however, we'll advise you create seperate PRs for each.

   This helps us track and automatically close the relevant issue when your Pull Request is merged.

## Commits

 We highly encourage the use of conventional commits. Here are some examples:

  - **feat:** Use this when introducing a new feature.
  - **fix:**  Use this when resolving any issues in the codebase.
  - **chore:** Use this when adding new links/resources or making minor changes.
    (e.g, `[chore]: Add database credentials`)
  - Please ensure that your **commit messages are concise and clear**.
  - Write commit messages in the **present tense**, as they reflect the current state of the codebase after the changes have been applied.

For additional reference, check out [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)