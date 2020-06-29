const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/server');
const { productsCatalog } = require('../../db_service/products_db');

chai.should();
chai.use(chaiHttp);

describe('Products API', () => {
  describe('GET /products', () => {
    it('fetches products catalog', () => {});
  });
  
  describe('GET /products/:category', () => {
    it('fetches products catalog', () => {});
  });
  
  describe('GET /products/requested', () => {
    it('fetches products catalog', () => {});
  });
});

describe('Users API', () => {
  describe('GET /account/profile', () => {});

  describe('POST /account/login', () => {});

  describe('POST /account/signup', () => {});
  
  describe('POST /account/profile/address', () => {});
});

describe('Orders API', () => {
  describe('GET /account/orders', () => {});

  describe('POST /account/order', () => {});
});