var firebaseConfig = {
    apiKey: "AIzaSyC75coYXS21OdkyH5ZTg6Qy-AvQwLgUbs4",
    authDomain: "lets-chat-66253.firebaseapp.com",
    databaseURL: "https://lets-chat-66253-default-rtdb.firebaseio.com",
    projectId: "lets-chat-66253",
    storageBucket: "lets-chat-66253.appspot.com",
    messagingSenderId: "420235011868",
    appId: "1:420235011868:web:0fcf35e15e131a9e587cd9",
    measurementId: "G-LTZPY4Y9R1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat_page.html";
  }
  
  //discuss in C97//
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  //discuss in C97//
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
  