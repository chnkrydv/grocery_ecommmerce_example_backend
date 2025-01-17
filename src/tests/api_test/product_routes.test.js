const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/server');
const {
  productCategoryExists,
  getProductsCatalog,
  getProductsInACategory,
  getProductsByIdsList,
} = require('../../mock_db_services/products_db_service');
const { NO_REQ_IDS_MESSAGE, categoryNotFoundMessage } = require('../../constants/messages');



chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('Products API', () => {
  const noRequestIdsMessage = { message: NO_REQ_IDS_MESSAGE };
  const condimentsNotFoundMessage = { message: categoryNotFoundMessage('condiments') };

  describe('GET /products/catalog', () => {
    it('sends products catalog', (done) => {
      chai
        .request(server)
        .get('/products/catalog')
        .end((_, res) => {
          const catalog_fromDb = getProductsCatalog();

          res.should.have.status(200);
          expect(res.body).to.deep.equal(catalog_fromDb);

          done();
        });
    });
  });

  describe('GET /products/catalog/:category', () => {
    it('sends all items in a product category', (done) => {
      chai
        .request(server)
        .get('/products/catalog/dairy')
        .end((_, res) => {
          const dairyCatalog_fromDb = getProductsInACategory('dairy');

          res.should.have.status(200);
          expect(res.body).to.deep.equal(dairyCatalog_fromDb);

          done();
        });
    });

    it('returns 404 if requested product category does not exist', (done) => {
      chai
        .request(server)
        .get('/products/catalog/condiments')
        .end((_, res) => {
          const doesCondimentsExist = productCategoryExists('condiments');

          expect(doesCondimentsExist).to.be.false;
          res.should.have.status(404);
          expect(res.body).to.deep.equal(condimentsNotFoundMessage)

          done();
        });
    });
  });

  describe('GET /products/ids', () => {
    it('returns 400: Bad Request, if products ids list is missing in request', (done) => {
      chai
        .request(server)
        .post('/products/ids')
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(noRequestIdsMessage);

          done();
        });
    });

    it('sends products based on requested product ids', (done) => {
      const someValidIdsList = ['d1', 'f4'];

      chai
        .request(server)
        .post('/products/ids')
        .send({ productIdList: someValidIdsList })
        .end((_, res) => {
          const result_fromDb = getProductsByIdsList(someValidIdsList);

          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(someValidIdsList.length);
          expect(res.body).to.deep.equal(result_fromDb);

          done();
        });
    });

    it('ignores if any id in request object does not match', (done) => {
      const validIds = ['d1', 'f3', 'stp6'];
      const listWithBothValidAndInvalidIds = [...validIds, 'some-random-id-which-does-not-exist'];

      chai
        .request(server)
        .post('/products/ids')
        .send({ productIdList: listWithBothValidAndInvalidIds })
        .end((_, res) => {
          const result_fromDb = getProductsByIdsList(listWithBothValidAndInvalidIds);

          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(validIds.length);
          expect(res.body).to.deep.equal(result_fromDb);

          done();
        });
    });

    it('sends empty array if noe of the requested id match from database', (done) => {
      const invalidIdsList = ['some-invalid-id', 'this-isnt-valid-either',];

      chai
        .request(server)
        .post('/products/ids')
        .send({ productIdList: invalidIdsList })
        .end((_, res) => {
          const result_fromDb = getProductsByIdsList(invalidIdsList);

          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eq(0);
          expect(res.body).to.deep.equal(result_fromDb);

          done();
        });
    });
  });
});