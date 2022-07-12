const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const myEmitter = new ZipCodeEmitter();

// handler for look up by zip code, prints result emitted by event
myEmitter.on("lookUpByZipCode", (result) => {
    console.log("Event lookUpByZipCode raised!");
    console.log(result);
});


// handler 1 for look up by city state, prints object emitted by event as is
myEmitter.on("lookupByCityState", (result) => {
    console.log("Event lookupByCityState raised! (Handler1)");
    console.log(result);
})

// handler 2 for look up by city state, prints object emitted by event with nice formatting
myEmitter.on("lookupByCityState", (result) => {
    console.log("Event lookupByCityState raised! (Handler2)");
    console.log(`City: ${result.city.toUpperCase()}, State: ${result.state.toUpperCase()}`);
    for (place of result.data) {
        console.log(`${place._id} has population of ${place.pop}`);
    }
})

// handler for get population by state, prints results emitted by event 
myEmitter.on("getPopulationByState", (result) => {
    console.log("Event getPopulationByState raised!");
    console.log(result);
})

// call our custom methods which emit events and results to our listeners defined above
myEmitter.lookupByZipCode("02215");

myEmitter.lookupByCityState("BOSTON", "MA");

myEmitter.getPopulationByState("MA");