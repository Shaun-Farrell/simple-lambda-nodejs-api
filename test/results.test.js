var assert = require('assert');
var Results = require('../results');

describe('Football Results API', function() {

  it('should have a return message that contains "Arsenal"', function() {

    const res = new Results();

    res.GetList(function(err, response) {

      const body = JSON.parse(response.body);
      assert.equal(0, body["message"].indexOf("Arsenal"));

    });

  });

});
