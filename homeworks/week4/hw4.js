const request = require('request');

const clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp';

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': clientID,
    },
  },
  (err, response, body) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        const result = JSON.parse(body);
        result.data.forEach((e) => {
          console.log(e.id, e.name);
        });
      } catch {
        console.log('資料錯誤');
      }
    }
  },
);
