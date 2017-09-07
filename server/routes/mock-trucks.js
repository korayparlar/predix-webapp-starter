var path = require("path");

// export the routes to be used in express/json-server in app.js
module.exports = function() {
  // mock truck data contains an extra "filter" property, so we can easily match the Predix API.
  const routes = {};

  // http://localhost:5000/mock-api/trucks/truck?filter=group=/group/plant-richmond-refinery
  const trucksJson = require(path.resolve(__dirname, '../sample-data/trucks/trucks.json'));
  routes["trucks"] = trucksJson;


  return routes;
};
