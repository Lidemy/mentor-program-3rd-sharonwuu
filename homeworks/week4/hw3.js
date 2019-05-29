const request = require('request');
const process = require('process');

const url = 'https://lidemy-book-store.herokuapp.com/books';
let result = '';

// GET：list
if (process.argv[2] === 'list' && !process.argv[3]) {
  request(
    `${url}?_limit=20`,
    (error, response, body) => {
      try {
        result = JSON.parse(body);
        result.forEach((book) => {
          console.log(book.id, book.name);
        });
      } catch {
        console.log('GET list 資料錯誤');
      }
    },
  );
} else if (process.argv[2] === 'read' && process.argv[3]) {
  // GET：read id
  request(
    `${url}/${process.argv[3]}`,
    (error, response, body) => {
      try {
        result = JSON.parse(body);
        if (!result.id) {
          throw new Error(`沒有id: ${process.argv[3]} 的書`);
        } else {
          console.log(result.id, result.name);
        }
      } catch (e) {
        console.log(e || 'GET read id 資料錯誤');
      }
    },
  );
} else if (process.argv[2] === 'delete' && process.argv[3]) {
  // DELETE：delete id
  request.del(
    `${url}/${process.argv[3]}`,
    (error, response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(`成功刪除 id:${process.argv[3]} 的書 `);
      } else {
        console.log('刪除失敗');
      }
    },
  );
} else if (process.argv[2] === 'create' && process.argv[3]) {
  // POST：create name
  request.post(
    {
      url: `${url}`,
      form: {
        name: `${process.argv[3]}`,
      },
    },
    (error, response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(`成功新增:${process.argv[3]}`);
      } else {
        console.log('新增失敗');
      }
    },
  );
} else if (process.argv[2] === 'update' && process.argv[3] && process.argv[4]) {
  // PATCH：update id name
  request.patch(
    {
      url: `${url}/${process.argv[3]}`,
      form: {
        name: `${process.argv[4]}`,
      },
    },
    (error, response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        console.log(`成功更新 id:${process.argv[3]}的書名為${process.argv[4]}`);
      } else {
        console.log('更新失敗');
      }
    },
  );
} else {
  console.log('指令錯誤');
}
