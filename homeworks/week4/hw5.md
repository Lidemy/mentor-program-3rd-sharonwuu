## 請以自己的話解釋 API 是什麼

Application Programming Interface 應用程式介面，透過這個介面溝通、交換資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

- *408 Request Timeout*

  請求超時。代表 client 端的 Request 送到 Server 花的時間超過 Server 預期的等待時間。

- *414 Request-URL Too Long*

  代表 Request URL 的長度超過伺服器能解析的長度，因此伺服器拒絕提供服務。有可能是因為將太多資訊用 GET 方法送出 Request，應該改用 POST 方法。

- *429 Too Many Requests*

  Client 端同時傳送太多 Request。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

（虛擬的）Base URL:https://goodgoodeat.com

| 說明         | Method | path             | 參數                    | 範例                   |
| ------------ | ------ | ---------------- | ----------------------- | ---------------------- |
| 所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量 | /restaurants?_limit=10 |
| 單一餐廳資料 | GET    | /restaurants/:id | 無                      | /restaurants/1         |
| 新增餐廳     | POST   | /restaurants     | name:餐廳名             | 無                     |
| 刪除餐廳     | DELETE | /restaurants/:id | 無                      | /restaurants/3         |
| 更改餐廳     | PATCH  | /restaurants/:id | name:餐廳名             | /restaurants/5         |

