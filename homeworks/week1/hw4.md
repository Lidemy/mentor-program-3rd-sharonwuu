## 跟你朋友介紹 Git

Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講



在學 Git 前要先知道一點 Command Line，不知道的話你可以去問 h0w 哥。

假設你安裝好 Git ，也寫好初代笑話 *joke.doc*，要用 Git 來做版本控制：

- 終端機進到該資料夾，輸入 `git init` 初始化 Git
  這代表要開始對這個資料夾裡的檔案做版本控制。
- `git add joke.doc` 把 *joke.doc* 加入待存區
- `git commit -m 'joke_初代'` 確定把 *joke.doc* 加入版本控制

現在這樣就存好版本一了。



接著你想到新梗，寫進 *joke.doc* 變成版本二

- 現在輸入 `git status` 會看到

  > hanges not staged for commit : modified joke.doc

  Git 發現你更動 *joke.doc* 了，而且還沒儲存

所以重新前面兩個步驟：

- `git add joke.doc` 把 *joke.doc* 加入待存區
- `git commit -m 'joke_新梗'` 把版本二的也 *joke.doc* 加入版本控制

現在把版本一和版本二都存好了，資料夾裡還是只有一個檔案。



要看版本一的內容時：

- 輸入 `git log` 可以看到剛剛存的兩個版本的資訊，兩個版本都有各自的 **commit 代碼**
  複製版本一的代碼，接著輸入 `:w` 離開版本資訊的畫面
- 輸入 `git checkout 剛剛複製的代碼` 

現在再打開 *joke.doc* 就會是版本一內容了。

回到最新版本：輸入 `git checkout master` 再打開 *joke.doc* 就會是版本二（最新版）的內容。



大概就是醬子，祝你順利成為電視笑話冠軍ㄌ