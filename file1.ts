Jason
an edit
another edit
Big editLast login: Tue Feb 26 14:21:55 on ttys003
Aarons-MacBook-Pro:client aaronrosenberg$ pwd
/Users/aaronrosenberg/go/src/gitalytics/client
Aarons-MacBook-Pro:client aaronrosenberg$ cd ../../..
Aarons-MacBook-Pro:go aaronrosenberg$ ls
bin	pkg	src
Aarons-MacBook-Pro:go aaronrosenberg$ cd ..
Aarons-MacBook-Pro:~ aaronrosenberg$ ls
Applications			Downloads			Movies				Projects			google-cloud-sdk
Desktop				Google Drive File Stream	Music				Public
Documents			Library				Pictures			go
Aarons-MacBook-Pro:~ aaronrosenberg$ cd Projects/
Aarons-MacBook-Pro:Projects aaronrosenberg$ cd testMergeCommits/
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote add origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: remote origin already exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
To github.com:aaronrbg/testMergePrs.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:aaronrbg/testMergePrs.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote rename origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: 'https://github.com/argitalyticsprotonmail/testMergeCommits.git' is not a valid remote name
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote set-url origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
ERROR: Permission to argitalyticsprotonmail/testMergeCommits.git denied to argitalytics.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
Counting objects: 41, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (31/31), done.
Writing objects: 100% (41/41), 1.14 MiB | 12.57 MiB/s, done.
Total 41 (delta 16), reused 3 (delta 0)
remote: Resolving deltas: 100% (16/16), done.
To github.com:argitalyticsprotonmail/testMergeCommits.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ pwd
/Users/aaronrosenberg/Projects/testMergeCommits
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ ls
Contributors - Report 2b@2x.png	file1.ts			file3.js
README.md			file2.txt
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ vim file1.ts


Jason
an edit
another edit
Big edit
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                    
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                                     
~                                                                                                           ~                                                                                                                     
~                                                                                                                     
-- INSERT -Last login: Tue Feb 26 14:21:55 on ttys003
Aarons-MacBook-Pro:client aaronrosenberg$ pwd
/Users/aaronrosenberg/go/src/gitalytics/client
Aarons-MacBook-Pro:client aaronrosenberg$ cd ../../..
Aarons-MacBook-Pro:go aaronrosenberg$ ls
bin	pkg	src
Aarons-MacBook-Pro:go aaronrosenberg$ cd ..
Aarons-MacBook-Pro:~ aaronrosenberg$ ls
Applications			Downloads			Movies				Projects			google-cloud-sdk
Desktop				Google Drive File Stream	Music				Public
Documents			Library				Pictures			go
Aarons-MacBook-Pro:~ aaronrosenberg$ cd Projects/
Aarons-MacBook-Pro:Projects aaronrosenberg$ cd testMergeCommits/
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote add origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: remote origin already exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
To github.com:aaronrbg/testMergePrs.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:aaronrbg/testMergePrs.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote rename origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: 'https://github.com/argitalyticsprotonmail/testMergeCommits.git' is not a valid remote name
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote set-url origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
ERROR: Permission to argitalyticsprotonmail/testMergeCommits.git denied to argitalytics.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
Counting objects: 41, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (31/31), done.
Writing objects: 100% (41/41), 1.14 MiB | 12.57 MiB/s, done.
Total 41 (delta 16), reused 3 (delta 0)
remote: Resolving deltas: 100% (16/16), done.
To github.com:argitalyticsprotonmail/testMergeCommits.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ pwd
/Users/aaronrosenberg/Projects/testMergeCommits
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ ls
Contributors - Report 2b@2x.png	file1.ts			file3.js
README.md			file2.txt
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ vim file1.ts


another edit
Big edit
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~                                                                                                           ~          
~
-- INSERT --

-- INSERT --
Last login: Tue Feb 26 14:21:55 on ttys003
Aarons-MacBook-Pro:client aaronrosenberg$ pwd
/Users/aaronrosenberg/go/src/gitalytics/client
Aarons-MacBook-Pro:client aaronrosenberg$ cd ../../..
Aarons-MacBook-Pro:go aaronrosenberg$ ls
bin	pkg	src
Aarons-MacBook-Pro:go aaronrosenberg$ cd ..
Aarons-MacBook-Pro:~ aaronrosenberg$ ls
Applications			Downloads			Movies				Projects			google-cloud-sdk
Desktop				Google Drive File Stream	Music				Public
Documents			Library				Pictures			go
Aarons-MacBook-Pro:~ aaronrosenberg$ cd Projects/
Aarons-MacBook-Pro:Projects aaronrosenberg$ cd testMergeCommits/
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote add origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: remote origin already exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
To github.com:aaronrbg/testMergePrs.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:aaronrbg/testMergePrs.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote rename origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
fatal: 'https://github.com/argitalyticsprotonmail/testMergeCommits.git' is not a valid remote name
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git remote set-url origin https://github.com/argitalyticsprotonmail/testMergeCommits.git
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
ERROR: Permission to argitalyticsprotonmail/testMergeCommits.git denied to argitalytics.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git push -u origin master
Counting objects: 41, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (31/31), done.
Writing objects: 100% (41/41), 1.14 MiB | 12.57 MiB/s, done.
Total 41 (delta 16), reused 3 (delta 0)
remote: Resolving deltas: 100% (16/16), done.
To github.com:argitalyticsprotonmail/testMergeCommits.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ pwd
/Users/aaronrosenberg/Projects/testMergeCommits
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ ls
Contributors - Report 2b@2x.png	file1.ts			file3.js
README.md			file2.txt
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Aarons-MacBook-Pro:testMergeCommits aaronrosenberg$ vim file1.ts


another edit
Big edit
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~                                                                                                           ~          
~
-- INSERT --

-- INSERT --
-

