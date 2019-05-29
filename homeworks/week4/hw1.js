const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    try {
      const bookList = JSON.parse(body);
      bookList.forEach((book) => {
        console.log(book.id, book.name);
      });
    } catch {
      console.log('資料錯誤');
    }
  },
);
