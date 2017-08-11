// JS
window.addEventListener('load', function() {
    // SELECTIONS -> we spread the nodeList to an Array and select the [x] item
    var inputName = [...document.querySelectorAll('input')][0]; 
    var inputPassword = [...document.querySelectorAll('input')][1];
    const submitButton = [...document.querySelectorAll('input')][2];

    // FIREBASE Connection
    const database = firebase.database();
    // create the 'users' end node
    var ref = database.ref('users');

    // DATA Write
    submitButton.addEventListener('click', function() {
        // create object
        var data = {
            name: inputName.value,
            password: inputPassword.value
        }
        // add or push the data object
        ref.push(data);

        // DATA Read
        ref.on('value', function(snapshot) {
            console.log(snapshot.val());
        }, function(err) {
            console.log('Error' + errorObject.code);
        });
    });
})

// ref.child('/users/name').on('value', function(snapshot { console.log(snapshot.val())}));
