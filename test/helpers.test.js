import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import * as helpers from './../app/utils/helpers';

// Axios uses a different adapter when running in Node, reset it to make regular http requests.
axios.defaults.adapter = httpAdapter;

describe('GET article', () => {
  test('adds an article', () => {
    return helpers.getAllArticles().then((res) => {
      expect(res.data.length).toEqual(1);
    });
  });
});
