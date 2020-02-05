var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://www.omdbapi.com/?apikey=51f260e4&"
var util = require("util");

describe("Positive Scenarios", ()=>{

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

  describe('search title as xml', function(done) {
      it('search title as xml', function(done) {
        request.get({ url: baseUrl + 't=dark' + '&r=xml' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search full title with spaces', function(done) {
      it('search full title with spaces', function(done) {
        request.get({ url: baseUrl + 't=dark' + '+knight' + '+rises' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search movies by search', function(done) {
      it('search movies by search', function(done) {
        request.get({ url: baseUrl + 's=dark' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search movies by search with pagination', function(done) {
      it('search movies by search with pagination', function(done) {
        request.get({ url: baseUrl + 's=dark' + '&page=2' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search movie with ID and Season', function(done) {
      it('search movie with ID and Season', function(done) {
        request.get({ url: baseUrl + 'i=tt2467372' + '&Season=4' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("Brooklyn Nine-Nine");
                    expect(bodyObject.Season).to.equal("4");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search movie with ID + Season + Episode', function(done) {
      it('search movie with ID + Season + Episode', function(done) {
        request.get({ url: baseUrl + 'i=tt2467372' + '&Season=4' + '&Episode=5'},
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("Halloween IV");
                    expect(bodyObject.Season).to.equal("4");
                    expect(bodyObject.Episode).to.equal("5");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

});

describe("Negative Scenarios", ()=> {

  describe('search with no title', function(done) {
      it('search with no title', function(done) {
        request.get({ url: baseUrl + 't=' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Something went wrong.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with year only', function(done) {
      it('search with year only', function(done) {
        request.get({ url: baseUrl + 'y=2010' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Something went wrong.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with blank search', function(done) {
      it('search with blank search', function(done) {
        request.get({ url: baseUrl + 's=' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Something went wrong.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('cant find movie search with random title', function(done) {
      it('cant  find movie search with random title', function(done) {
        request.get({ url: baseUrl + 't=sadlk12341' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('cant find movie search with random title', function(done) {
      it('cant find movie search with random title', function(done) {
        request.get({ url: baseUrl + 't=sadlk12341' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('cant find movie search with year <1900', function(done) {
      it('cant find movie search with year <1900', function(done) {
        request.get({ url: baseUrl + 't=lord' + 'y=1200' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('cant find movie search with year >=2050', function(done) {
      it('cant find movie search with year >=2050', function(done) {
        request.get({ url: baseUrl + 't=lord' + 'y=2050' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('cant find movie search with random char type', function(done) {
      it('cant find movie search with random char type', function(done) {
        request.get({ url: baseUrl + 's=dark' + 'type=asdf' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with random char search', function(done) {
      it('search with random char search', function(done) {
        request.get({ url: baseUrl + 's=asadfa123' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Movie not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with random symbol search', function(done) {
      it('search with random symbol search', function(done) {
        request.get({ url: baseUrl + 's=!@#$%!' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Too many results.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with no parameter', function(done) {
      it('search with no parameter', function(done) {
        request.get({ url: baseUrl + '' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Something went wrong.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with random unregistered ID', function(done) {
      it('search with random unregistered ID', function(done) {
        request.get({ url: baseUrl + 'i=123asd1' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Incorrect IMDb ID.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with correct ID but incorrect Season', function(done) {
      it('search with correct ID but incorrect Season', function(done) {
        request.get({ url: baseUrl + 'i=tt0944947' + '&Season=10' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Series or season not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with correct ID & Season but incorrect Episode', function(done) {
      it('search with correct ID & Season but incorrect Episode', function(done) {
        request.get({ url: baseUrl + 'i=tt2467372' + '&Season=4' + '&Episode=25' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Series or episode not found!");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search only with type', function(done) {
      it('search onyl with type', function(done) {
        request.get({ url: baseUrl + 'type=series' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Response).to.equal("False");
                    expect(bodyObject.Error).to.equal("Something went wrong.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

});
