import request from 'supertest';
import mongoose from 'mongoose';
import httpServer from './../server';

let articleId;

describe('Calls to API server', () => {
  afterAll(() => {
    httpServer.close(() => {
      mongoose.connection.close();
    });
  });
  it('posts an article', () => {
    expect.assertions(1);
    return request(httpServer)
      .post('/new-article')
      .send({ title: 'Testing', body: "It's a test article!!" })
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res.statusCode).toBe(200);
      });
  });
  it('returns all articles', () => {
    expect.assertions(1);
    return request(httpServer).get('/articles').then((res) => {
      // store one of the created IDs for remaining tests
      articleId = res.body[res.body.length - 1]._id;
      expect(res.body.length).toEqual(11);
    });
  });
  it('returns one article', () => {
    expect.assertions(1);
    return request(httpServer).get(`/article/${articleId}`).then((res) => {
      expect(res.body).toHaveProperty('title');
    });
  });
  it('updates an article', () => {
    expect.assertions(1);
    return request(httpServer)
      .put(`/article/${articleId}`)
      .send({ title: 'Testing Again' })
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res.body.message).toBe('Success: Article updated.');
      });
  });
  it('deletes an article', () => {
    expect.assertions(1);
    return request(httpServer)
      .delete(`/article/${articleId}`)
      .send({ title: 'Testing Again' })
      .set('Accept', 'application/json')
      .then((res) => {
        expect(res.body.message).toBe('Success: Article deleted.');
      });
  });
});
