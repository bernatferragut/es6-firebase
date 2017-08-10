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

    // Game
    let score = result.textContent;
    myButton.addEventListener('click', function(e) {
        score++;
         // console.log('clicked!');
        // console.log(score);
         result.textContent =  score;

        return score && player.value;
    });

     // db Connection
    const database = firebase.database();
    // accessing the 'scores' node
    const ref = database.ref('scores'); 
    // start to bind different kind of events like data or a 'value'
    ref.on('value', gotData, errData);
    //Functions
    function gotData(data) {
       // console.log(data.val());
       const keys = Object.keys(data.val());
       console.log(keys);
       keys.forEach(function(key) {
           let name = key.name;
           console.log(name);
           let score = key.score;
       })
    }

    function errData(err) {
        console.log('Error!');
        console.log(err);
    }

    // Create data Object to Submit to database
    submit.addEventListener( 'click', function() {
        var data = {
            name: player.value,
            score: score
        }
        // accessing the 'scores' node
        ref = database.ref('scores'); 
        // adding Data to Database
        ref.push(data);
    });
})

