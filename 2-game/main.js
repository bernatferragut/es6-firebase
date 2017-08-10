// JS

// On load
window.addEventListener('load', function() {

    // Select Button
    const myButton = document.querySelector('.btn');

    // Select Score
    const result = document.querySelector('.result');

    // Select Input
    const player = document.querySelector('input');

    //Select Submit
    const submit = document.querySelector('.submit');

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
    const database = firebase.database();

    // Create data Object to Submit to database
    submit.addEventListener( 'click', function() {
        var data = {
            name: player.value,
            score: score
        }
        console.log(data);
        // accessing the 'scores' node
        const ref = database.ref('scores'); 
        // adding Data to Database
        ref.push(data);
    });

    // Game
    let score = result.textContent;
    myButton.addEventListener('click', function(e) {
        score++;
         // console.log('clicked!');
        // console.log(score);
         result.textContent =  score;

        return score && player.value;
    });
})

