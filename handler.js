'use strict';

// Lambda method that gives a Http response (to an API Gateway request)

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Arsenal won 4-2'
    })
  };

  callback(null, response);

};
