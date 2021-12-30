
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
   document.getElementById("user_name").innerHTMl="Welcome"+ user_name +"!";
    
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Names",
      });
      localStorage.setItem("room_name", room_name);
      window.location="chatter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname"+Room_names);
       row="<div class='room_name'id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;


      });});}
getData();
function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="chatter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
