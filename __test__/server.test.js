'use strict';

const superagent = require('superagent');
const server = require('../lib/server');

describe('server.js', () => {
  test('POST request should return with a 200 status code and a body is no error', () => {
    let cat = '{"text": "catts"}';
    return superagent.post('http://localhost:3000/api/cowsay')
      .send(cat)
      .then(response => {
        expect(response.status).toEqual(200);
        expect(JSON.stringify(response.body)).toEqual(cat);
      });
  });

  // test('POST request should return with a 400 status if there is any error', () => {
  //   return superagent.post('http://localhost:3000/api/cowsay')
  //     .set({'Content-Type' : 'application/json'})
  //     .send('{')
  //     .then(response => Promise.reject(response))
  //     .catch(response => {
  //       expect(response.status).toEqual(400);
  //     });
  // });

});
