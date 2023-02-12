// Подключаем модуль http
import http from 'http';

import crypto from 'crypto'
import pow from "./pow/pow.js"
import getRandomString from './randomString.js';

// Задаем порт, на котором будет работать сервер
const port = 3005;



const difficulty = 4;
let challenge
let resPow 

// define a function to generate a pow challenge
const generateChallenge = () => crypto.randomBytes(32).toString('hex');
// Создаем сервер
const server = http.createServer((req, res) => {
  // Здесь мы будем работать с запросами и ответами
  
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Node.js is a cross-platform JavaScript');

    challenge = generateChallenge();

    res.end(JSON.stringify({ challenge, difficulty}));
    
    console.log("res: ",res.statusCode)
    // req.on.log({data})
  
    req.on('data', (data) => {
      console.log({data})
      let body = JSON.parse(data.toString());
      // resPow = pow(challenge, difficulty)
      // console.log(resPow.nonce)
    });

  } else if (req.method === 'POST') {
    // resPow = pow(challenge, difficulty)
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // console.log(chunk.toString())
      console.log(chunk.toString())
    });

    // let bodyRes
    req.on('end', () => {
    // Do something with body
        const bodyRes =JSON.parse(body)
        console.log({bodyRes})
        console.log(bodyRes.resPow)
        console.log("body:" + JSON.parse(body))
        // res.end("body:"+body);
        resPow = pow(challenge, difficulty)
        
        console.log("resPow.nonce: "+ resPow.nonce);
        console.log("resPow.duration: "+ resPow.duration)
        console.log("bodyRes.resPow.nonce: "+ bodyRes.resPow.nonce);
        console.log("bodyRes.resPow.duration: "+ bodyRes.resPow.duration)


        // if (pow(challenge, difficulty) === bodyRes.resPow) {
        if ((resPow.nonce == bodyRes.resPow.nonce)) {
        // && (resPow.duration == bodyRes.resPow.duration)){
          console.log('Challenge solved!');
          
          // res.end('Welcome to the server!');
          res.end(getRandomString())
        } else {
          console.log('Invalid solution!');
          // console.log("challenge: "+ chall);
          // console.log("difficulty: "+ diff)
          // console.log("POW: " + pow(challenge, difficulty))
          // const df = pow(challenge, difficulty).nonce
          // const ddd = df
          // console.log({ddd})
          console.log("bodyRes.resPow: " + bodyRes.resPow)
          const dd = bodyRes.resPow
          console.log({dd})

          res.end('Server closed for you!');
        }

    });

    // res.writeHead(200, { 'Content-Type': 'application/json' });
      // verify the result

    // res.end('Server closed for you!');

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  }





  // console.log ("req:",req)
});



// Запускаем сервер
server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log(`Server is listening on ${port}`);
});