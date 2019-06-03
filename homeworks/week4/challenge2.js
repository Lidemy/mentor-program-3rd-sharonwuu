const request = require('request');
const process = require('process');

const clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp';
const url = 'https://api.twitch.tv/helix/';

let gameID = '';
let streams = '';
let pagination = '';

const getGameID = () => {
  const promise = new Promise((resolve, reject) => {
    request(
      {
        url: `${url}games?name=${process.argv[2]}`,
        headers: {
          'Client-ID': clientID,
        },
      },
      (err, response, body) => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
            const result = JSON.parse(body);
            gameID = result.data[0].id;
            resolve();
          } catch {
            reject(new Error('getGameID_資料有誤'));
          }
        } else {
          reject(new Error(`getGameID_statusCode:${response.statusCode}`));
        }
      },
    );
  });
  return promise;
};

const get100Streams = () => {
  const promise = new Promise((resolve, reject) => {
    request(
      {
        url: `${url}streams?game_id=${gameID}&first=${100}`,
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
            resolve(pagination);
          } catch {
            reject(new Error('get100Streams_資料有誤'));
          }
        } else {
          reject(new Error(`get100Streams_statusCode:${response.statusCode}`));
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
        url: `${url}streams?game_id=${gameID}&first=${100}&after=${pagination}`,
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
            reject(new Error('get200Streams_資料有誤'));
          }
        } else {
          reject(new Error(`get200Streams_statusCode:${response.statusCode}`));
        }
      },
    );
  });
  return promise;
};

getGameID()
  .then(get100Streams)
  .then(get200Streams)
  .catch((error) => {
    console.log(error);
  });
