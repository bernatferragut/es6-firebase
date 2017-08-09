// JS

// On load
window.addEventListener('load', function() {

    console.log('loaded');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDJOIovuSj706mkKosauT_cfKndaHcyZ-U",
        authDomain: "simple-db-1.firebaseapp.com",
        databaseURL: "https://simple-db-1.firebaseio.com",
        projectId: "simple-db-1",
        storageBucket: "simple-db-1.appspot.com",
        messagingSenderId: "335823253560"
    };
  firebase.initializeApp(config);

    // db Connection
    let database = firebase.database();
    let ref = database.ref('scores'); // accessing the 'scores' node

    // my Data
    let data = {
        name: 'Bernat',
        score: 44        
    }

    // adding Data to Database
    ref.push(data);

    // Select Button
    const myButton = document.querySelector('.btn');

    // Select Score
    const result = document.querySelector('.result');

    // Game
    let score = result.textContent;
        myButton.addEventListener('click', function(e) {
            score++;
            // console.log('clicked!');
            // console.log(score);
            result.textContent =  score;
        });
})

