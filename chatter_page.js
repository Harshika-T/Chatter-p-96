const firebaseConfig = {
    apiKey: "AIzaSyAoZLqjmVJBlxNOhB6QQ4ZVuSrKpnmpUmE",
    authDomain: "chatter-app-53c87.firebaseapp.com",
    databaseURL: "https://chatter-app-53c87-default-rtdb.firebaseio.com",
    projectId: "chatter-app-53c87",
    storageBucket: "chatter-app-53c87.appspot.com",
    messagingSenderId: "472516358107",
    appId: "1:472516358107:web:d925d6a2392db1bce401fe",
    measurementId: "G-ZQC2S1B98W"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push()({
              name:user_name,
              message:msg,
              like:0,
        }
        );
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
