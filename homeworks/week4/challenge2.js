const request = require('request');
const process = require('process');

const clientID = 'br7rjl64ccvsnrsg4tzmyj597233pp';
const url = 'https://api.twitch.tv/helix/';
let gameID = '';

/* --- 使用 Promise --- */
const getGameID = new Promise((resolve) => {
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
          resolve(gameID);
        } catch {
          console.log('getGameID_資料有誤');
        }
      } else {
        console.log('getGameID_statusCode:', response.statusCode);
      }
    },
  );
});

getGameID.then((id) => {
  // getStreamsByID
  request(
    {
      url: `${url}streams?game_id=${id}&first=${20}`,
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
          console.log('getStreamsByID_資料有誤');
        }
      } else {
        console.log('getStreamsByID_statusCode:', response.statusCode);
      }
    },
  );
});


/* ------ 原始寫法：request 包在 request 裡面 ------
request(
  {
    url: `https://api.twitch.tv/helix/games?name=${process.argv[2]}`,
    headers: {
      'Client-ID': clientID,
    },
  },
  (err, response, body) => {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      try {
        const result = JSON.parse(body);
        gameID = result.data[0].id;

        // --- getStreamsByID start ----//
          request(
            {
              url: `https://api.twitch.tv/helix/streams?game_id=${gameID}&first=${2}`,
              headers: {
               'Client-ID': clientID,
              },
            },
            (err, response, body) => {
              if (response.statusCode >= 200 && response.statusCode < 300) {
                try {
                  const result = JSON.parse(body);
                  result.data.forEach((e) => {
                    console.log(e.id , e.title);
                  })
                } catch {
                  console.log('getStreamsByID_資料有誤');
                }
              } else {
                console.log('getStreamsByID_statusCode:', response.statusCode);
              }
            }
          )
        // --- getStreamsByID end ----//

      } catch {
        console.log('getGameID_資料有誤');
      }
    } else {
      console.log('getGameID_statusCode:', response.statusCode);
    }
  }
)
*/
