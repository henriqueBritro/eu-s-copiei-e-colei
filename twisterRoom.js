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



//ADICIONE SEUS LINKS FIREBASE

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "twisterpage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
