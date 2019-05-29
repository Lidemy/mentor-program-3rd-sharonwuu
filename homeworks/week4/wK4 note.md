#### 遇到的問題：

- 挑戰題輸出 200 筆資料
  是輸出 *遊戲目前最多人觀看的實況*，API 寫的上限是一次最多 100 筆資料，但是不知道怎麼另外抓 第 101-200 筆的資料 XD。

- 超級挑戰題
  這題的想法是：先發第一個 Request 拿到遊戲 ID，再發第二個 Request 拿實況名單。

  1. **pipe**
     最先想到的是在 cmd 學到的 `pipe(|)：把前面的輸出當作後面的輸入`，第一個 response 裡的遊戲 ID，就是 第二個 Request 要送出的 data 之一，感覺很合理！
     不過在 request 文件裡 `pipe` 的用法，看起來是連接檔案的，半知半解的試用之後果然失敗了，誤會 pipe XD

  2. **request 包在 request 裡面？！**
     想了一下第二個 Request 應該是在拿到遊戲 ID之後再發送的，所以就變成這樣：
     ```
     request(
       data, 
       function(){
         ... 拿到 gameID,
         request(
           data,
           function(){ 
             ...印出實況
           }
         )
       }
     )
     ```
     這樣可以拿到資料，但程式碼看起來跟 callback hell 長得有點像 (?)，
     所以應該要用 Promise 在確定第一個 request 有順利拿到遊戲 ID，才傳第二個 request

  3. **Promise**
     ```
     const getGameID = new Promise((resolve, reject) => {
       request(
         data, 
         function() {
           ... 拿到 gameID,
           resolve(gameID)
         }
       )
     });

     getGameID.then((gameID) => {
       request(
       	data, 
         function() {
           ...印出實況
         }
       )
     })
     ```
     照著 MDN 的教學，寫好之後順利拿到資料了！
     
     看起來比較易讀，但跟前一個寫法比起來，只是把第二個 request 獨立出來
     
     而前一個寫法用了 `try..catch..`，抓不到 gameID 不會執行第二個 request，好像也不會出現「沒拿到 gameID 就傳第二個 request」的狀況，所以是不是不需要用 Promise，還是用錯了？！
     
     麻煩 Huli 解答了 XD