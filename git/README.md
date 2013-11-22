[- NOTES FROM GIT ASSIGNMENT:

In this assignment I learned the basics of GITHUB:

git init generates a system folder named git to work with the current repository

Once I cloned the repository, a README.md is created on my 405 directory

The working directory is: c:\users\francisco\405 The files must be created and modified under the working directory

When a file is changed or created, we need to:

git add filename

To stage it

Then we need to commit it: git commit -a -m "Description of the changes"

Use git status to check the changes all the time

logout => to leave

git init => to create an empty repository git status => to verify the status of the project git add filename.txt => to put the file on the stagin area (not in our repository yet) git commit -m "Description of the changes, or aditions made made" => to the repository git add '*.txt' => To add all .txt file to the repository (includes all the directories) git commit -m 'Add all the .txt files' => .txt to the repository git log => shows all the transactions done git remote add origin https://github.com/try-git/try_git.git => To add a remote repository git push -u origin master => to push our files into the remote repository git pull origin master => To get our files changed by other peers

git diff HEAD => In this case we want the diff of our most recent commit, which we can refer to using the HEAD pointer.

Another great use for diff is looking at changes within files that have already been staged. Remember, staged files are files we have told git that are ready to be committed.

git diff --staged => to see the changes you just staged.

git reset octofamily/octodog.txt => unstage files by using 'reset' (it just unstage it, it remains in the same directory) Files can be changed back to how they were at the last commit by using the command: git checkout

git branch clean_up => a copy (aka. branch) of their code they can make separate commits to.

git checkout clean_up => to switch to the clean_up branch

git rm '*.txt' => will not only remove the actual files from disk, but will also stage the removal of the files for us.

git commit -m "Remove all the cats" => To commit all the changes

git checkout master => back to the master

git merge clean_up => to tell Git to merge the clean_up branch into the master

git branch -d clean_up => to delete a branch

git push => to push everything you've been working on to your remote repository

$ git config --list => to check your settings, to list all the settings Git can find at that point ]

[My report card](http://www.codeschool.com/users/francisqueins)