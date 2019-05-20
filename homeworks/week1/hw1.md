## 交作業流程

### 寫作業（在電腦的檔案）

####1. 建立 Branch

-  `git branch week1` 建立一個新 Branch
-  `git checkout week1`切換到新的 Branch

或是綜合步驟 `git checkout -b week1`

#### 2. 寫作業..

#### 3. Commit

寫好作業、有檔案更動後 Commit：`git commit -am 'hw1done'` 

（eslint 會檢查程式碼，通過才算 commit 成功）



###上傳作業（從電腦傳到 Lidemy 個人頁面）

#### 4. Push 到 GitHub

Commit 成功後，把剛剛建的 branch push 到 GitHub 上：`git push origin week1`

#### 5. Pull Request

GitHub Lidemy 個人作業頁面會出現上一步 push 的 branch，按下 *compare & pull request*

在 Open a pull request 打標題和留言心得或想問的問題，按下 *Create pull request*



###交作業（交到作業專用的 Repo）

#### 6. 建立 Issue

到 Lidemy/homeworks-3rd 的 Issues，按 *New Issue* 

- 標題：按照格式填 繳交的作業週數， 如 `[Week1]`

- 留言：貼上 步驟五的 Pull Request 網址、打心得

按 *Submit New Issue* 

### 等 Huli 批改

作業沒問題的話，Huli 會

1. 在個人頁面 Merge Pull Request 、刪掉 Branch
2. 在作業專用的 Repo 刪掉 Issue

### 交作業後續

把 GitHub 上的檔案內容和電腦裡同步，在電腦上

- `git checkout master` 切回 master
- `git pull origin master ` 把 GitHub 上 Merge 過的 master 拉回電腦
- `git branch -d week1`  刪掉交作業的 branch

這樣電腦和 GitHub 的檔案就一致了





