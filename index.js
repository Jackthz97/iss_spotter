// index.js

// The code below is temporary and can be commented out.

// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('invalidIPHere', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     console.log(data);
//   }
// });

// const { fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', data);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  convertFlyOver(passTimes);
});

const convertFlyOver = function(issPassTime) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  for (let obj of issPassTime) {
    let unixTimestamp = obj.risetime * 1000;
    const time = new Date(unixTimestamp);
    const day = days[time.getDay()];
    const date = time.getDate();
    const month = months[time.getMonth()];
    const year = time.getFullYear();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (second < 10) {
      second = "0" + second;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    console.log(`Next pass at ${day} ${month} ${date} ${year} ${hour}:${minute}:${second} GMT-0500 (Eastern Standard Time) for ${obj.duration} seconds!`);
  }
};
