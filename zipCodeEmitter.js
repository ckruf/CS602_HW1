const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');
const zipCodeModule_v2 = require("./zipCodeModule_v2");



// Custom class 
class ZipCodeEmitter  extends EventEmitter {
	
	// member functions

	lookupByZipCode(zip)  {
		var searchObject = data.find((data) => data._id === zip);
		this.emit("lookUpByZipCode", searchObject);
	}

	lookupByCityState(city, state)  {
		const filteredCities = data.filter(x =>
            x.state === state &&
            x.city === city
        );

        const filteredCitiesMapped = filteredCities
		.map(cityObject => {
			return {"_id": cityObject._id, "pop": cityObject.pop}
		});

        let result = {
            "city": city,
            "state": state,
            "data": filteredCitiesMapped
        }

		this.emit("lookupByCityState", result);

	}

	getPopulationByState(state) {
		let filteredState = data.filter(element => element.state === state)
		let total = filteredState.reduce(function (previousValue, currentValue){
        return previousValue + currentValue.pop;
		},0);

		let result = {
			"state": state,
			"pop": total
		}

		this.emit("getPopulationByState", result);
	}

}

module.exports.ZipCodeEmitter = ZipCodeEmitter;

