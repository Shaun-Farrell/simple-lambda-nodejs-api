var Results = require('./results');

// Lambda method that gives a Http response (to an API Gateway request)

module.exports.main = (event, context, callback) => {

  const res = new Results();

  res.GetList(callback);

};
