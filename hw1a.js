const cities = require('./zipCodeModule_v1');
const colors = require('colors');



cities.lookupByZipCode("02215");
cities.lookupByZipCode("99999");

cities.lookupByCityState("BOSTON","MA");
cities.lookupByCityState("BOSTON","TX");
cities.lookupByCityState("BOSTON","AK");

cities.getPopulationByState("MA");
cities.getPopulationByState("TX");
cities.getPopulationByState("AA");
