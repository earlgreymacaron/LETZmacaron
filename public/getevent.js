// Initialize Firebase
var config = {
    apiKey: "AIzaSyDOdNjI_ZiKAIWoJEw6rSOjZ92ekxUDyUk",
    authDomain: "macaron-9eb97.firebaseapp.com",
    databaseURL: "https://macaron-9eb97.firebaseio.com",
    storageBucket: "macaron-9eb97.appspot.com",
    messagingSenderId: "106137658409"
};
firebase.initializeApp(config);

var FBref = firebase.database().ref().child("events").child("라뒤레");
var heading1 = document.getElementById("heading1");
var img0 = document.getElementById("image0");
var img1 = document.getElementById("image1");
var addr1 = document.getElementById("addr1");


FBref.on('value', function(snap) {
    heading1.innerText = snap.val().shopName;
    addr1.innerText = snap.val().shopAddr;
    img0.src = "data:image/jpeg;base64,"+snap.val().photos;
    img1.src = "data:image/jpeg;base64,"+snap.val().photos;
});