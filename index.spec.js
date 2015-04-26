var app = require('nodeular-core/express')(),
  expect = require('chai').expect,
  request = require('supertest');

require('./index');

describe('module a', function (){
  it('/a should respond with 200', function (done){
    request(app)
      .get('/a')
      .expect(200, done);
  });

  it('a/api should respond with 200', function (done){
    request(app)
      .get('/a/api')
      .expect(200, done);
  });
});