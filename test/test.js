var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://www.omdbapi.com/?apikey=51f260e4&"
var util = require("util");

describe('search title & year', function(done) {
    it('search title & year', function(done) {
      request.get({ url: baseUrl + 't=social' + '&y=2010' },
              function(error, response, body) {
                var bodyObject = JSON.parse(body);
                  expect(bodyObject.Title).to.equal("The Social Network");
                  expect(bodyObject.Year).to.equal("2010");
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search title', function(done) {
    it('search title', function(done) {
      request.get({ url: baseUrl + 't=the_social_network' },
              function(error, response, body) {
                var bodyObject = JSON.parse(body);
                  expect(bodyObject.Title).to.equal("The Social Network");
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search id', function(done) {
    it('search id', function(done) {
      request.get({ url: baseUrl + 'i=tt1285016' },
              function(error, response, body) {
                var bodyObject = JSON.parse(body);
                  expect(bodyObject.imdbID).to.equal("tt1285016");
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search title & type', function(done) {
    it('search title & type', function(done) {
      request.get({ url: baseUrl + 't=dark' + '&type=series' },
              function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search title & short plot', function(done) {
    it('search title & short plot', function(done) {
      request.get({ url: baseUrl + 't=dark' + '&plot=short' },
              function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search title & full plot', function(done) {
    it('search title & full plot', function(done) {
      request.get({ url: baseUrl + 't=dark' + '&plot=full' },
              function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});

describe('search title as json', function(done) {
    it('search title as json', function(done) {
      request.get({ url: baseUrl + 't=dark' + '&r=json' },
              function(error, response, body) {
                var bodyObject = JSON.parse(body);
                  expect(bodyObject.Title).to.equal("Dark");
                  expect(response.statusCode).to.equal(200);
                  console.log(body);
                done();
              });
    });
});
