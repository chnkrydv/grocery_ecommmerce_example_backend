const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../api/server');
const { getUsers } = require('../../mock_db_services/users_db_service');
const {
  AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE,
  BAD_SIGNUP_REQ_MESSAGE,
  BAD_LOGIN_REQ_MESSAGE,
  INVALID_USERNAME_MESSAGE,
  INVALID_PASSWORD_MESSAGE,
  USER_ADDED_MESSAGE,
  BAD_ADDRESS_REQ_MESSAGE,
  ADDRESS_UPDATE_MESSAGE,
  exisitingUserMessage,
} = require('../../constants/messages');

chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

describe('Users API', () => {
  const validUser = getUsers()[0];

  const invalidTokenMessage = { message: AUTH_TOKEN_MISSING_OR_INVALID_MESSAGE };
  const badSignupRequestMessage = { message: BAD_SIGNUP_REQ_MESSAGE };
  const badLoginRequestMessage = { message: BAD_LOGIN_REQ_MESSAGE };
  const invalidUsernameMessage = { message: INVALID_USERNAME_MESSAGE };
  const invalidPasswordMessage = { message: INVALID_PASSWORD_MESSAGE };
  const badAddressRequestMessage = { message: BAD_ADDRESS_REQ_MESSAGE };
  const exisitingUserMessageObj = (username) => ({ message: exisitingUserMessage(username) });






  describe('POST /account/signup', () => {
    const validNewUser = { name: 'Firstname Lastname', username: 'flname', password: 'pswd' };
    const anotherNewUser = { name: 'Firstname Lastname', username: 'newUsername', password: 'pswd' };

    it('creates new user account and sends success message', (done) => {
      chai
        .request(server)
        .post('/account/signup')
        .send(validNewUser)
        .end((_, res) => {
          expect(res.body.message).exist;
          expect(res.body.userId).exist;
          expect(res.body.token).exist;
          res.should.have.status(200);
          res.body.message.should.be.eq(USER_ADDED_MESSAGE);
          res.body.userId.should.be.a('number');
          res.body.token.should.be.a('string');

          done();
        });
    });

    it('sends user token instantly after signup', (done) => {
      chai
        .request(server)
        .post('/account/signup')
        .send(anotherNewUser)
        .end((_, res) => {
          res.should.have.status(200);
          expect(res.body.token).exist;
          res.body.token.should.be.a('string');

          done();
        });
    });

    it('returns 400: Bad Request if request body is missing', (done) => {
      chai
        .request(server)
        .post('/account/signup')
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badSignupRequestMessage);

          done();
        });
    });

    it('returns 400: Bad Request if request body is invalid', (done) => {
      const badRequestObject = { username: 'somethingOkay', passssssswooorddd: 'with-random-value' };

      chai
        .request(server)
        .post('/account/signup')
        .send(badRequestObject)
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badSignupRequestMessage);

          done();
        });
    });

    it('returns 401: Unauthorized, if username already exists', (done) => {
      const existingUsername = validUser.username;

      chai
        .request(server)
        .post('/account/signup')
        .send({ name: 'new name', username: existingUsername, password: 'some-valid-password' })
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(exisitingUserMessageObj(existingUsername));

          done();
        });
    });
  });









  describe('POST /account/login', () => {
    it('sends user token and user object', (done) => {
      chai
        .request(server)
        .post('/account/login')
        .send({ username: validUser.username, password: validUser.password })
        .end((_, res) => {
          res.should.have.status(200);
          expect(res.body.token).exist;
          expect(res.body.user).exist;
          res.body.user.should.be.a('object');
          expect(res.body.someNonExistingKey).does.not.exist;

          done();
        });
    });

    it('returns 400: Bad Request, if request body is missing', (done) => {
      chai
        .request(server)
        .post('/account/login')
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badLoginRequestMessage);

          done();
        });
    });

    it('returns 400: Bad Request, if request body is invalid', (done) => {
      const badRequestObject = { entirelyDifferentRequest: 'with-random-value' };

      chai
        .request(server)
        .post('/account/login')
        .send(badRequestObject)
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badLoginRequestMessage);

          done();
        });
    });

    it('returns 401: Unauthorized with a message, if username does not exists', (done) => {
      const nonExistingUsername = 'some-non-existing-username';

      chai
        .request(server)
        .post('/account/login')
        .send({ username: nonExistingUsername, password: validUser.password })
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidUsernameMessage);

          done();
        });
    });

    it('returns 401: Unauthorized with a message, if password is incorrect', (done) => {
      const invalidPassword = 'some-wierd-invalid-pssword-which-on-one-haves';

      chai
        .request(server)
        .post('/account/login')
        .send({ username: validUser.username, password: invalidPassword })
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidPasswordMessage);

          done();
        });
    });
  });












  describe('GET /account/profile', () => {
    it('returns 401: Unauthorized, if token is missing', (done) => {
      chai
        .request(server)
        .get('/account/profile')
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });

    it('returns 401: Unauthorized, if token is invalid', (done) => {
      chai
        .request(server)
        .get('/account/profile')
        .set('x-access-token', 'some-invalid-token')
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });

    it('sends user profile', (done) => {
      chai
        .request(server)
        .post('/account/login')
        .send({ username: validUser.username, password: validUser.password })
        .end((_, resp) => {
          const validToken = resp.body.token;

          chai
            .request(server)
            .get('/account/profile')
            .set('x-access-token', validToken)
            .end((_, res) => {
              res.should.have.status(200);

              done();
            });
        });
    });
  });












  describe('POST /account/profile/address', () => {
    const validAddress = { line1: 'line one', line2: 'line two', line3: 'line three' };
    const emptyValidAddress = { line1: '', line2: '', line3: '' };
    const invalidFieldsAddress = { line1000: 'line one', line2000: 'line two', line3000: 'line three' };
    let token;

    it("creates new or updates user's address", (done) => {
      chai
        .request(server)
        .post('/account/login')
        .send(validUser)
        .end((_, res) => {
          token = res.body.token;

          chai
            .request(server)
            .post('/account/profile/address')
            .set('x-access-token', token)
            .send({ address: validAddress })
            .end((_, res) => {

              res.should.have.status(200);
              expect(res.body).to.deep.equal({ message: ADDRESS_UPDATE_MESSAGE });

              done();
            });
        });
    });

    it('returns 401: Unauthorized, if token is missing', (done) => {
      chai
        .request(server)
        .post('/account/profile/address')
        .send({ address: validAddress })
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });

    it('returns 401: Unauthorized, if token is invalid', (done) => {
      chai
        .request(server)
        .post('/account/profile/address')
        .set('x-access-token', 'some-invalid-token')
        .send({ address: validAddress })
        .end((_, res) => {

          res.should.have.status(401);
          expect(res.body).to.deep.equal(invalidTokenMessage);

          done();
        });
    });

    it('returns 400: Bad Request, if address in request is missing', (done) => {
      chai
        .request(server)
        .post('/account/profile/address')
        .set('x-access-token', token)
        .send({})
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badAddressRequestMessage);

          done();
        });
    });

    it('returns 400: Bad Request, if all address lines are empty string', (done) => {
      chai
        .request(server)
        .post('/account/profile/address')
        .set('x-access-token', token)
        .send({ address: emptyValidAddress })
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badAddressRequestMessage);

          done();
        });
    });

    it('returns 400: Bad Request, if address object is not in correct format', (done) => {
      chai
        .request(server)
        .post('/account/profile/address')
        .set('x-access-token', token)
        .send({ address: invalidFieldsAddress })
        .end((_, res) => {
          res.should.have.status(400);
          expect(res.body).to.deep.equal(badAddressRequestMessage);

          done();
        });
    });
  });
});