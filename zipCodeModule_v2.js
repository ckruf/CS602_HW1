const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    var searchResult = data.find((data) => data._id === zip);
    console.log(searchResult);
    return searchResult;
};

module.exports.lookupByCityState = (city, state) => {
    // get array filtered for state and city from original array
    const filteredCities = data.filter(x =>
        x.state === state &&
        x.city === city
    );
    
    // create new array from filtered array so that only _id and pop properties are included for each object
    const filteredCitiesMapped = filteredCities.map(cityObject => {return {"_id": cityObject._id, "pop": cityObject.pop}})
    
    // create result object
    let result = {
        "city": city,
        "state": state,
        "data": filteredCitiesMapped
    } 
    
    // print for debugging
    console.log(result)

    return result
};

module.exports.getPopulationByState = (state) => {
    // filter array for state
    let filteredState = data.filter(element => element.state === state)
    
    // get total population of all objects in the array using reduce
    let total = filteredState.reduce(function (previousValue, currentValue){
    return previousValue + currentValue.pop;
    },0);
    
    // create results object
    let result = {
        "state": state,
        "pop": total
    }

    //print for debugging
    console.log(result)

    return result;
}
