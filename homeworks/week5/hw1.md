
## 前四週心得
前四週的學習主軸和第二期差不多，但多了新的內容和作業，試著用不同的方式解題、重新複習，還是有很多收穫！

#### 第一週 cmd / Git
前陣子面試的時候被問到「Git 和 Github 有什麼不一樣？」、「Github 不能做版本控制嗎？」

- Git 是版本控制的軟體，每個專案就是一個 Repository，會有一個 `.git` 檔儲存一些版本控制所需的資訊。
- GitHub 是一個網站，把 Repository 放到網站上，就可以和別人共享，達到多人協作。也可以直接用網頁的介面操作一些 Git 指令。

#### 第二週 的 Eslint
對 Eslint 又愛又恨的，尤其在程式碼比較多的時候，作業一起 Commit 竟然跑出 200 多個 Error，不過一起解決一堆 Error 有另一種爽感 XD

#### 第三週 內建函式、Test Case
這週可以說是全新的一週，回頭看第二期的作業，當時我完全忘記要寫測試，作業也很少用到內建函式，在這週才恍然大悟。

關於內建函式，有個感想：有網路的時候都會用，沒網路的時候忘光光...
之前太依賴查資料，有些基本的用法和語法，常常順手查來用，碰到沒網路或是沒筆記可以看的時候，就會不確定怎麼用 😵
以後要盡量不查網路/筆記，先想過、試過，最後再去查是卡在什麼關鍵點。

#### 第四週 API
用 Node.js Request 感覺比之前的 XMLHttprequest 好理解許多（也可能是因為之前卡關過了）

最後遇到的問題：Promise
一開始不知道要用 Promise，在串非同步事件碰到 *要等 A 執行成功再執行 B*，Request 包來包去、卡在一起的時候，才突然想到好像有個東西就是處理這個狀況的！
雖然之前有學過、知道用途，但第一次實際要用還是花了一些時間看文件和用法。


## 解題心得

很喜歡這種闖關遊戲！邊玩邊熟悉串接 API 以及 Request 的使用。其中還是有一些卡關的地方：

#### Lv9 User Agent
第一直覺是「下載 IE6 來用」XD

從網路上查到 Chrome 的 Network Conditions 可以更改 User Agent，結果選項只有支援到 IE7。

仔細看 User Agent 是一串類似產品編號和規格的資訊，所以要傳一個 IE6 的資訊騙過 server ？！
在 Google 搜尋「IE6 User Agent」，找到一組 IE6 on Windows XP SP2 的 User Agent，送出去終於成功了！

#### Lv13 轉址
「請你仔細找找」最先找的方式是反白，想說會不會有白色的字（當然沒有 XD）
看 console 也沒有東西，看 Network 只有一個 `deliver_token_result`，四處點來點去都空蕩蕩的，所以就看了 hint。

知道是轉址後才注意到 `deliver_token_result` 不是原本輸入的 `deliver_token`，重新輸入後看到其他轉址的檔案，但發現這些之後我還是找不到 token，原來是藏在 Resopnse headers 裡。

#### Lv14 Proxy
這題卡在設定 Proxy 一直失敗

試用很多個 Proxy 都失敗，直到發現 Proxy 有分 HTTP / HTTPS / Scoks.. 不同的協議，加上在電腦上設定 Proxy 的地方也有這些選項：網頁代理伺服器 HTTP / 安全網頁代理伺服器 HTTPS / Socks 代理伺服器 等等。

先前設定的時候 沒有注意選用的 Proxy 是屬於哪種，都只設定 HTTP，最後把該設定的都設定好就成功了～

#### Lv15 SEO is hard
持續卡關下去，先交作業好了 XD
