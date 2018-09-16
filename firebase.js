// Initialize Firebase
var config = {
    apiKey: "AIzaSyCE1zeW72z6wxtUmu8NshZ8VrIxZU6T7P0",
    authDomain: "htn2018-dcc64.firebaseapp.com",
    databaseURL: "https://htn2018-dcc64.firebaseio.com",
    projectId: "htn2018-dcc64",
    storageBucket: "htn2018-dcc64.appspot.com",
    messagingSenderId: "560530870668"
};
firebase.initializeApp(config);

window.onload = function () {

}

function getInput() {
    var code = document.getElementById("input").value;
    // console.log(code)
    alert(code)
}