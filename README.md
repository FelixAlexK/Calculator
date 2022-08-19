# Calculator

# Quiz 1



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.it.hs-heilbronn.de/it/courses/ai/aud/aud-sose2022/quiz-1.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.it.hs-heilbronn.de/it/courses/ai/aud/aud-sose2022/quiz-1/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!).  Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.
## Name


## Description

This project represents a CLI Quiz Game inspired by the TV show "Who Wants to Be a Millionaire?"
It was created within the algorithm and data structure lecture.

## Installation

To play the Quiz you need to follow the following steps:

1. install IntelliJ, Eclipse or every other IDE for Java Development 
   (some are listed here: https://www.softwaretestinghelp.com/best-java-ide-and-online-compilers/#IDE_Used_For_Java_Development)
2. download the project source code .zip file from GitLab (GitLab Repository: https://git.it.hs-heilbronn.de/it/courses/ai/aud/aud-sose2022/quiz-1)
3. extract the .zip file 
4. open this file in an IDE listed in point one 
5. execute the main method 

#### dependencies

In some situations you have to install the following dependencies from Maven: 
- gson-2.9.0 (https://mvnrepository.com/artifact/com.google.code.gson/gson/2.9.0)
- jUnit-5.8.1

## Usage

This step-by-step list helps you to understand how to play the quiz game:

1. At the start you have the choice out of any category, you can choose a category by entering 1,2,3,4...
2. after you chose a category, you get displayed the question with the difficulty easy and the options, then a timer starts.
3. now you have to enter the correct answer with 1,2,3 or 4, if you need some help enter 5, for a 50/50 Joker
4. if you require too much time, you get displayed a message and your final score, then the game ends
5. if you answer wrong you get displayed a message and  your final score, then the game ends as well
6. else if you answer correct you get points, and then you get displayed the question with the difficulty medium and so on until difficulty hard
7. if you answer the question of difficulty hard, you can decide another category and the steps are repeating.

## Authors and acknowledgment

- Julian Ertle 
- Markus Frank
- Felix Kuhbier 

were involved in this Project

## Project status

The project is working as it should and meets all required conditions,
thus the project is finished for now.
Nevertheless, there are some ideas to improve this project, like: 
- adding more categories
- more questions per difficulty
- extra difficulties
- GUI

## Project PowerPoint
https://studhsheilbronnde-my.sharepoint.com/:p:/g/personal/fkuhbier_stud_hs-heilbronn_de/ESCNDGH_hsxDrrL-O8kZK1YB0nzPehIPd6ZtzHiaoG7F-A?e=vva5Of
