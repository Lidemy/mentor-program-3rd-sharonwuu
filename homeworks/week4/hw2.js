const request = require('request');
const process = require('process');

let action = '';

if (process.argv[2] === 'list' && !process.argv[3]) {
  action = 'list';
} else if (process.argv[2] === 'read') {
  if (process.argv[3] < 21 && process.argv[3] > 0) {
    action = `read ${process.argv[3]}`;
  } else {
    console.log('要輸入 1-20 的書籍編號啊');
  }
} else {
  console.log('輸入錯誤，試試輸入 "list" 或 "read" 編號');
}

if (action) {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      try {
        const bookList = JSON.parse(body);
        if (action === 'list') {
          bookList.forEach((book) => {
            console.log(book.id, book.name);
          });
        } else {
          const readBook = bookList[process.argv[3] - 1];
          console.log(readBook.id, readBook.name);
        }
      } catch {
        console.log('資料錯誤');
      }
    },
  );
}
