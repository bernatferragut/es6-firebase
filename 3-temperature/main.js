// JS
// console.log('works!');

// SELECTIONS
const t = document.querySelector('temperature');
const h = document.querySelector('humidity');
const c = document.querySelector('clock');

// pad function to put 0 before numbers < 10
const pad = function (x) {
    return x < 10 ? '0' + x : x;
}   

// showClock function()
const showClock = function () {
    const myClock = new Date();
    let h = pad(myClock.getHours());
    let m = pad(myClock.getMinutes());
    let s = pad(myClock.getSeconds());
    c.innerHTML = [h, m, s].join(':');
}

// setInterval function()
setInterval(showClock, 1000);

// FIREBASE DB CONNECTIONS
const database = new firebase.database();
// ACCESSING FIRST NODECHILD
const databaseRef = database.ref('meteo');
// ON CHANGE - any value
databaseRef.on('value', function(snaphot) {
    data = snaphot.val();
    h.innerHTML = data.humidity;
    t.innerHTML = data.temperature;
});
