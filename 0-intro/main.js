// Vanilla JS way of doing data binding
// let myInput = document.querySelector('input');
// let h1 = document.querySelector('h1');
// myInput.addEventListener('keyup', (e) => h1.innerHTML = myInput.value );

// The Vue way

new Vue({
    el: 'main',
    data: {
        message: 'Bernat Ferragut'
    }
});
