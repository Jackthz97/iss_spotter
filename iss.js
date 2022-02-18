const request = require('request');
const fetchMyIP = function(callback) {
  request(`https://api.ipify.og?format=+json`, (error, response, body) => {
    if (!error) {
      const ip = JSON.parse(body);
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      return callback(error, ip[0]);
      
    }
    if (error) {
      callback(error, null);
      return;
    }
  });
};


// module.exports = { fetchMyIP };