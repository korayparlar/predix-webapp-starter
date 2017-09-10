var path = require("path");

// export the routes to be used in express/json-server in app.js
module.exports = function() {
  const routes = {};
  const truckJson = require(path.resolve(__dirname, '../sample-data/trucks/truck-1-maintenance.json'));
  const trucksSummaryJson = require(path.resolve(__dirname, '../sample-data/trucks/kpi-trucks.json'));
  const truck_1_summaryJson = require(path.resolve(__dirname, '../sample-data/trucks/kpi-truck-1.json'));
  // http://localhost:5000/mock-api/datagrid/asset/compressor-2017
  routes["trucks/tk-1"] = truckJson;


  // http://localhost:5000/mock-api/datagrid/asset/compressor-2017/summary
  routes["summary/trucks"] = trucksSummaryJson;
  routes["trucks/tk-1/summary"] = truck_1_summaryJson;

  return routes;
};
