import request from 'supertest';

const httpServer = require('./../server');
const mongoose = require('mongoose');

describe('GET articles', () => {
  afterAll(() => {
    httpServer.close(() => {
      mongoose.connection.close();
    });
  });
  test('returns all articles', () => {
    expect.assertions(1);
    return request(httpServer).get('/articles').then((res) => {
      expect(res.body.length).toEqual(10);
    });
  });
});
