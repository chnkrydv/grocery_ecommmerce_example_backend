const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/server');
const { AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE } = require('../../constants/messages');
const { getUsers } = require('../../mock_db_services/users_db_service');
const { getOrders, createNewOrder } = require('../../mock_db_services/orders_db_service');



chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('Orders API', () => {
  const invalidTokenMessage = {message: AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE};

  const { username, password } = getUsers()[0];
  const validUserDetails = { username, password };
  let token;
  let userId;

  describe('GET /account/orders', () => {
    it('sends all previous orders list for a user account', (done) => {
      chai
        .request(server)
        .post('/account/login')
        .send(validUserDetails)
        .end((_, res) => {
          token = res.body.token;
          userId = res.body.user.userId;

          chai
            .request(server)
            .get('/account/orders')
            .set('x-access-token', token)
            .end((_, res) => {
              const orders_fromDb = getOrders(userId);

              res.should.have.status(200);
              expect(res.body).to.deep.equal(orders_fromDb);

              done();
            });
        });
    });

    it('return 401: Unauthorized, if token is missing', (done) => {
      chai
        .request(server)
        .get('/account/orders')
        .end((_, res) => {
          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });

    it('return 401: Unauthorized, if token is invalid', (done) => {
      chai
        .request(server)
        .get('/account/orders')
        .set('x-access-token', 'some-invalid-token')
        .end((_, res) => {
          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });
  });

  describe('POST /account/order', () => {
    it('creates new order and sends order details', () => {
    });

    it('returns 403 if any of requested items are out of stock', () => {
    });
  });
});