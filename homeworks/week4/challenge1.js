const request = require('request');

const clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp';
const url = 'https://api.twitch.tv/helix/streams';
const gameID = 21779; // League of Legends

request(
  {
    url: `${url}/?game_id=${gameID}&first=${20}`,
    headers: {
      'Client-ID': clientID,
    },
  },
  (err, response, body) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        const result = JSON.parse(body);
        result.data.forEach((e) => {
          console.log(e.id, e.title);
        });
      } catch {
        console.log('資料有誤');
      }
    } else {
      console.log('statusCode:', response.statusCode);
    }
  },
);
