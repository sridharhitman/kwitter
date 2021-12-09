//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA2Ur_5djhM03uLQ9vcj1b7FBYpF99SJ0Q",
      authDomain: "kwitter-dcf2a.firebaseapp.com",
      databaseURL: "https://kwitter-dcf2a-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcf2a",
      storageBucket: "kwitter-dcf2a.appspot.com",
      messagingSenderId: "68296065656",
      appId: "1:68296065656:web:595fe63f43f619ff37a38d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
    
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         
//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
//Redirect To the kwitter room
function backToRoom(){
      window.location = "kwitter_room.html"
}
//logout button
function logout() {
      localStorage.removeItem("userName");
      window.location = "index.html";
    }
    
