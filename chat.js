const firebaseConfig = {
    apiKey: "AIzaSyASoVHF7h6_kfv7Eu4Nt-PBZgyRZQmWpfw",
    authDomain: "c100-let-s-chat-app.firebaseapp.com",
    projectId: "c100-let-s-chat-app",
    storageBucket: "c100-let-s-chat-app.appspot.com",
    messagingSenderId: "549419092129",
    appId: "1:549419092129:web:30c12f5458a34872bb48e0",
    measurementId: "G-JLY0QRH1E4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}


