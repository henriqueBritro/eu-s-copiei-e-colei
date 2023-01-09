const firebaseConfig = {
    apiKey: "AIzaSyD326cyBJL_6QMU0xaXA6NW1F-yXnj82vA",
    authDomain: "kaka2-bd702.firebaseapp.com",
    databaseURL: "https://kaka2-bd702-default-rtdb.firebaseio.com",
    projectId: "kaka2-bd702",
    storageBucket: "kaka2-bd702.appspot.com",
    messagingSenderId: "859053800657",
    appId: "1:859053800657:web:6fb52a44ce2f14f28799f0",
    measurementId: "G-X885JQM73Q"
  };
  firebase.initializeApp(firebaseConfig);
  

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
}})
//Início do código
function send(){
    msg = document.getElementById("msg").value;
firebase.database().ref(roomName).push({
    name:userName,
    menssage:msg,
    like:0
});
 
document.getElementById("msg").value = "";
//Fim do código
}});;
getData();}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
        window.location = "index.html";
    }
