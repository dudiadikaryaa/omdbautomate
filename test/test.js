var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "http://www.omdbapi.com/?apikey=51f260e4&"
var util = require("util");

var testCase = {
  "positive" : {
    "searchTitleYear" : "As a User, I want to search movie by title & year",
    "searchTitle" : "As a User, I want to search movie by title",
    "searchID" : "As a User, I want to search movie by movie's ID",
    "searchTitleType" : "As a User, I want to search movie by title & type",
    "searchTitleShortPlot" : "As a User, I want to search movie by title & short plot",
    "searchTitleFullPlot" : "As a User, I want to search movie by title & full plot",
    "searchTitleJSON" : "As a User, I want to search movie by title & get data type back as JSON",
    "searchTitleXML" : "As a User, I want to search movie by title & get data type back as XML",
    "searchTitleWithSpaces" : "As a User, I want to search movie by full title with spaces",
    "searchMoviesbySearch" : "As a User, I want to search movie by search function",
    "searchMoviesbySearchWithPagination" : "As a User, I want to search movie by search function with pagination",
    "searchMoviesWithIDSeason" : "As a User, I want to search movie by ID with Season",
    "searchMoviesWithIDSeasonEpisode" : "As a User, I want to search movie by ID, Season, and Episode"
  },
  "negative" : {

  }
}

describe("Positive Scenarios", ()=>{

  describe('Search Title & Year', function(done) {
    it( testCase.positive.searchTitleYear, async() => {
          request.get({ url: baseUrl + 't=social' + '&y=2010' },
                  function(error, response, body) {
                    var bodyObject = JSON.parse(body);
                      expect(bodyObject.Title).to.equal("The Social Network");
                      expect(bodyObject.Year).to.equal("2010");
                      expect(response.statusCode).to.equal(200);
                      console.log("Log of Search Title & Year");
                      console.log(body);
                      console.log("=======");
                  });
        });
  });

  describe('Search Title', function(done) {
      it( testCase.positive.searchTitle, async() => {
        request.get({ url: baseUrl + 't=the_social_network' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("The Social Network");
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search ID', function(done) {
      it( testCase.positive.searchID, async() => {
        request.get({ url: baseUrl + 'i=tt1285016' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.imdbID).to.equal("tt1285016");
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search ID");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Title & Type', function(done) {
      it( testCase.positive.searchTitleType, async() => {
        request.get({ url: baseUrl + 't=dark' + '&type=series' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title & Type");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Title & Short Plot', function(done) {
      it( testCase.positive.searchTitleShortPlot, async() => {
        request.get({ url: baseUrl + 't=lord' + '&plot=short' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title & Short Plot");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Title & Full Plot', function(done) {
      it( testCase.positive.searchTitleFullPlot, async() => {
        request.get({ url: baseUrl + 't=lord' + '&plot=full' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title & Full Plot");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Title as JSON', function(done) {
      it( testCase.positive.searchTitleJSON, async() => {
        request.get({ url: baseUrl + 't=dark' + '&r=json' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("Dark");
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title as JSON");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Title as XML', function(done) {
      it( testCase.positive.searchTitleXML, async() => {
        request.get({ url: baseUrl + 't=dark' + '&r=xml' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Title as XML");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Full Title with Spaces', function(done) {
      it( testCase.positive.searchTitleWithSpaces, async() => {
        request.get({ url: baseUrl + 't=dark' + '+knight' + '+rises' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Full Title with Spaces");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Movies by Search', function(done) {
      it( testCase.positive.searchMoviesbySearch, async() => {
        request.get({ url: baseUrl + 's=dark' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Movies by Search");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Movies by Search with Pagination', function(done) {
      it( testCase.positive.searchMoviesbySearchWithPagination, async() => {
        request.get({ url: baseUrl + 's=dark' + '&page=2' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Movies by Search with Pagination");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Movie with ID and Season', function(done) {
      it( testCase.positive.searchMoviesWithIDSeason, async() => {
        request.get({ url: baseUrl + 'i=tt2467372' + '&Season=4' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("Brooklyn Nine-Nine");
                    expect(bodyObject.Season).to.equal("4");
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Movies with ID and Season");
                    console.log(body);
                    console.log("=======");
                });
      });
  });

  describe('Search Movie with ID, Season and Episode', function(done) {
      it( testCase.positive.searchMoviesWithIDSeasonEpisode, async() => {
        request.get({ url: baseUrl + 'i=tt2467372' + '&Season=4' + '&Episode=5'},
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Title).to.equal("Halloween IV");
                    expect(bodyObject.Season).to.equal("4");
                    expect(bodyObject.Episode).to.equal("5");
                    expect(response.statusCode).to.equal(200);
                    console.log("Log of Search Movie with ID, Season and Episode");
                    console.log(body);
                    console.log("=======");
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

  describe('search with wrong type', function(done) {
      it('search with wrong type', function(done) {
        request.get({ url: baseUrl + 's=lord' +'&type=opera' },
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

  describe('search with wrong plot type', function(done) {
      it('search with wrong type', function(done) {
        request.get({ url: baseUrl + 't=lord' +'&type=movie' + '&plot=high' },
                function(error, response, body) {
                  var bodyObject = JSON.parse(body);
                    expect(bodyObject.Plot).to.equal("A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

  describe('search with wrong data type to return', function(done) {
      it('search with wrong data type to return', function(done) {
        request.get({ url: baseUrl + 't=lord' +'&type=movie' + '&r=asdf' },
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                  done();
                });
      });
  });

});
