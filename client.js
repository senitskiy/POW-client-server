// Клиент на Node.js
import http from 'http'

import pow from "./pow/pow.js"
// const client = new http.Socket();



// const https = require('https');
// http.ClientRequest.

// const http = require('http');
// const agent = new http.Agent({ keepAlive: true });

// function retriableRequest() {
//   const req = http
//     .get('http://localhost:3000', { agent }, (res) => {
//       // ...
//     })
//     .on('error', (err) => {
//       // Check if retry is needed
//       if (req.reusedSocket &#x26;&#x26; err.code === 'ECONNRESET') {
//         retriableRequest();
//       }
//     });
// }

// retriableRequest();

// http.request()

let challenge, difficulty
let resPow
let jsonRes = ""
const url = 'http://127.0.0.1:3005'

const requestGet = http.get(url, ( res) => {
  if (res.statusCode !== 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
    console.log(data);

    const obj = JSON.parse(data)
    challenge = obj.challenge// JSON.parse(data)
     
    difficulty = obj.difficulty

    console.log("challenge: " + challenge)
    console.log("difficulty: " + difficulty)
    if (challenge && difficulty) {
      resPow = pow(challenge, difficulty)
      console.log("resPow: ",resPow)
      jsonRes = JSON.stringify({ resPow})
      // request.s
      // request..e.end(jsonRes);     
    }
  });

  // res.end('JSON.stringify({ resPow}));  
  // if (resPow.nonce && resPow.duration) {
  // res.off res.en.end(jsonRes); 
  // }

  res.on('data', function(data) {
    console.log('Server: ' + data);
    // rl.prompt();
    });
  
  res.on('end', function(){
      console.log("Response Status:", res.statusCode);
      console.log("Response Headers:", res.headers);
      console.log(data);
  });

  res.on('close', () => {
    console.log('Retrieved all data');

    // const nonce = crypto.randomBytes(16).toString('hex');
    // console.log(nonce);
    // console.log(JSON.parse(data));
  });
});

// const jsonRes1 = JSON.stringify({"challenge":"db6eb17b86fc980ddca30f94c884800e3dad5c77034440ccc786e0598a871051","difficulty":4})





// setTimeout(() => {
//   console.log('Hello World!');
// }, 500);

setTimeout( () => {

  if (jsonRes) {

    let options = {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(jsonRes,"utf8") 
      },
      mode: 'same-origin',
      json: true, 
      body: jsonRes
    };

    let reqPost = http.request(url, options, (res) => {

    let data = ""
  
    res.on("data", (chunk) => {
      // console.log("data:" + data)
      console.log(`BODY: ${chunk}`);
      data += chunk;
    });
  
    res.on("end", () => {
      console.log('Response: ' + data);
      // console.log(JSON.parse(data).explanation);
    });
  
  
    // res.setEncoding('utf8');
    // res.on('data', function (chunk) {
    //     console.log('Response: ' + chunk);
    // });
  
  
    // (res) => {
      // res.on('data', (chunk) => {
      //   console.log(chunk.toString());
      //   });
      // }
      // );
      
      // req.write(JSON.stringify(postData));
      // req.end();
  
  
  
    });

  console.log('jsonRes:' + jsonRes);
  reqPost.write(jsonRes)//
  // reqPost.write(JSON.stringify({"challenge":"db6eb17b86fc980ddca30f94c884800e3dad5c77034440ccc786e0598a871051","difficulty":4}));
  reqPost.end();
  }
  // jsonRes = ""
}, 1000)











// body: resPow

// request.post(options, (err, res, body) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(`Status: ${res.statusCode}`)
//   // console.log(body)
//   console.log({body})
//   console.log({resPow})
// })



// console.log(resPow)

// import client from 'node-rest-client' 
// const client = new Client();
// console.log({client});

// client.Client.


// client.

// console.log("GET " + endpoint_url);

// var req = client.post(url, function (data, response) {
//     fn(JSON.stringify(data, null, 2));
// });
 
// req.on('error', function (err) {
//     console.log('request error', err);
// });

// http.


// import request from 'request'

// const options = {
//   url: 'http://localhost:3005',
//   json: true,
//   body: resPow
// }

// request.post(options, (err, res, body) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log(`Status: ${res.statusCode}`)
//   // console.log(body)
//   console.log({body})
//   console.log({resPow})
// })

// const requestPost = http.request(url, ( res) => {

//   console.log("Response Status:", res);

//   res.on('end', function(){
//     console.log("Response Status:", res.statusCode);
//     console.log("Response Headers:", res.headers);
//     console.log(res);
//   });  

//   res.on('close', () => {
//     console.log('Retrieved all data');
//     console.log(res);

//     // const nonce = crypto.randomBytes(16).toString('hex');
//     // console.log(nonce);
//     // console.log(JSON.parse(data));
//   });
// })


// var data = {
//   query: 'Google',
//   limit: 10
//   };
  
  //Construct the request
  // import XMLHttpRequest from 'XMLHttpRequest'
  // var http = new XMLHttpRequest();
  // http.open('POST', 'http://example.com/search');
  // http.setRequestHeader('Content-Type', 'application/json');
  // http.send(JSON.stringify(data));


// // Подключиться к серверу на порту 8124.
// client.connect(3004, '127.0.0.1', function() {
//   console.log('Connected');
  
//   // Отправить данные серверу 
//   // client.write('Hello, server! Love, Client.');
// });

// // Получить данные от сервера. 
// client.on('data', function(data) {
//   console.log('Received: ' + data);
  
//   // Закрыть соединение после получения данных
//   client.destroy(); 
// });

// // Добавить обработчик для закрытия соединения
// client.on('close', function() {
//   console.log('Connection closed');
// });




