const request = require('request');

const clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp';
const url = 'https://api.twitch.tv/helix/streams';
const gameID = 21779; // League of Legends

let streams = '';
let pagination = '';

const get100Streams = () => {
  const promise = new Promise((resolve, reject) => {
    request(
      {
        url: `${url}/?game_id=${gameID}&first=${100}`,
        headers: {
          'Client-ID': clientID,
        },
      },
      (err, response, body) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
            const result = JSON.parse(body);
            streams = result.data;
            pagination = result.pagination.cursor;
            resolve();
          } catch {
            reject(new Error('資料錯誤'));
          }
        } else {
          reject(new Error(`Error,statusCode:${response.statusCode}`));
        }
      },
    );
  });
  return promise;
};

const get200Streams = () => {
  const promise = new Promise((resolve, reject) => {
    request(
      {
        url: `${url}/?game_id=${gameID}&first=${100}&after=${pagination}`,
        headers: {
          'Client-ID': clientID,
        },
      },
      (err, response, body) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
            const result = JSON.parse(body);
            result.data.filter(e => streams.push(e));
            streams.forEach((e, i) => {
              console.log(i + 1, e.id, e.title);
            });
          } catch {
            reject(new Error('資料錯誤'));
          }
        } else {
          reject(new Error(`Error,statusCode:${response.statusCode}`));
        }
      },
    );
  });
  return promise;
};

get100Streams()
  .then(get200Streams)
  .catch((error) => {
    console.log(error);
  });
