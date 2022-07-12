const { lookupByZipCode } = require('./zipCodeModule_v2');
const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    for (const element of data){
        if(element._id === zip){
            console.log(element)
            return element
        }
    }
    console.log(undefined)
    return undefined;
};



module.exports.lookupByCityState = (city, state) => {
    // create array containing result data
    let cityState = [];
    // iterate over all data and add items to array if condition true
    for (const element of data){
        if(element.state === state && element.city === city){
            cityState.push(element);
        }

    }
    // create results object
    let resultObj = {
        city : city,
        state : state,
        data : cityState
    };
    // print results object for debugging
    console.log(resultObj);
    
    return resultObj;
};

module.exports.getPopulationByState = (state) => {
    // initialize total at 0
    total = 0;
    
    // iterate over all data and add population to total if state matches
    for(const element of data){
        if(element.state === state){
            total += element.pop
        }
    }
    // create results object
    let populationObj = {
        state : state,
        pop : total
    }
    // print results object for debugging
    console.log(populationObj);

    return populationObj;
};

