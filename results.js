
class Results {

  constructor() {
  }

  GetList(callback) {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Arsenal won 4-2'
      })
    };
    //TODO: this assumes success - should handle error and pass in first param
    callback(null, response);
  }

}

module.exports = Results;
