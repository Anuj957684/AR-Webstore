# Contributing Guidelines

**Thank you** for considering contributing to this project! We appreciate your interest and support. This documentation contains **set of guidelines** to help you during the contribution process. Please take a moment to review this information before submitting any contributions.
___

## Reporting Bugs and Issues 

If you encounter a bug or issue while using this project, we encourage you to report it. While reporting bugs, please provide as much information as possible, including:
 
1. Steps to reproduce the issue
2. Expected behavior
3. Actual behavior
4. Any relevant error messages or screenshots

To report a bug or issue, please follow these steps:

1. Go to the issues section of the repository.
2. Click on the "New Issue" button.
3. Fill in the necessary details, following the provided template.
___

## Code Formatting and Style Guidelines
Consistent code formatting and style are important for maintaining a clean and readable codebase. Please adhere to the following guidelines when submitting code changes:

1. Use spaces for indentation.
2. Follow the established naming conventions for variables, functions and classes.
3. Write clear and concise comments to explain complex code sections.
___

# Submitting Contributions👨🏻‍💻

Below you will find the process and workflow used to review and merge your changes.

## **Step 1 : Choose an issue/ Create an issue**

- Look for the existing issue or create your own issue.
- Comment on the respective issue you would like to work before creating a Pull Request.
- Wait for the issue to be assigned to you after which you can start working on it.

## **Step 2 : Fork the repository**

- Fork this repository by clicking on the "Fork" button. This will create a local copy of this respository on your GitHub profile.

## **Step 3 : Clone the forked repository**

- Once the repository is forked you need to clone it to your local machine.
- Click on the "Code" button in the repository page and copy the link provided in the dropdown menu.
  

```bash
git clone https://github.com/<your-username>/3D Enhancer @aa
```

- Keep a reference to the original project in `upstream` remote.

```bash  
cd 3D Enhancer @aa  
git remote add upstream https://github.com/ShwetKhatri2001/3D Enhancer @aa
git remote -v # To the check the remotes for this repository 
```  

- If the project is forked already, update the copy before working.

```bash
git remote update
git checkout <branch-name>
git rebase upstream/<branch-name>
``` 

## **Step 4 : Create a new branch**

- Always create a new branch and name it accordingly so as to identify the issue you are addressing.

```bash
# It will create a new branch with name branch_name and switch to that branch 
git checkout -b branch_name
```
## **Step 5 : Work on the issue assigned**

- Work on the issue(s) assigned to you, make the necessary changes in the files/folders needed.
- After making the changes add them to the branch you've created.
  
```bash  
# To add all new files to branch Branch_Name  
git add .  

# To add only a few files to Branch_Name
git add <file name>
```
## **Step 6: Commit the changes**

- Add your commits.
- Along with the commit give a descriptive message that reflects your changes.
  
```bash
git commit -m "message"  
```
- Note : A Pull Request should always have only one commit. 
  
## **Step 7: Push the changes**

- Push the committed changes in your branch to your remote repository.
  
```bash  
git push origin branch_name
```
## **Step 8: Create a Pull Request**

- Go to your repository in the browser and click on **compare and pull request**.
- Add a **title** and **description** to your pull request that best describes your contribution.
- After which the pull request will be **reviewed** and the **maintainer** will provide the reviews required for the changes.

If no changes are needed, this means that your Pull Request has been reviewed and will be **merged** to the original code base by the maintainer.

- **Note:** Always add **screenshots** to help the maintainer know what this enhancement/implementation is all about.

By following these guidelines, we aim to create a welcoming community where everyone feels comfortable and empowered to contribute.

Thank you for **interest** and **support**!
___

## Need more help?

You can refer to the following articles on basics of Git and GitHub and also contact the Project Mentors, in case you are stuck:

- [Watch this video to get started, if you have no clue about open source](https://youtu.be/SYtPC9tHYyQ)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)




