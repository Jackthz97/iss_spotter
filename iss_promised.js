const request = require('request-promise-native');

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const {response} = JSON.parse(body);
      return response;
    });
};

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(data) {
  const ip = JSON.parse(data).ip;
  return (request(`https://freegeoip.app/json/${ip}`));
};

const fetchISSFlyOverTimes = function(data) {
  const {latitude, longitude} = JSON.parse(data);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

module.exports = { nextISSTimesForMyLocation };