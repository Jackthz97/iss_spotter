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

module.exports = {convertFlyOver};