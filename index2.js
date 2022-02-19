const { nextISSTimesForMyLocation } = require('./iss_promised');
const {convertFlyOver} = require('./convertFlyOver');

nextISSTimesForMyLocation()
  .then((data) => {
    convertFlyOver(data);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
