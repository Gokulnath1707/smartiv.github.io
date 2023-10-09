

const firebaseConfig3 = {
        
  apiKey: "AIzaSyBgj_jKGcI9EAhoEDcjTZp_Spng4VVpSTc",
  authDomain: "fir-config1.firebaseapp.com",
  databaseURL: "https://fir-config1-default-rtdb.firebaseio.com",
  projectId: "fir-config1",
  storageBucket: "fir-config1.appspot.com",
  messagingSenderId: "543248063856",
  appId: "1:543248063856:web:7d60fdf6080d0f778103b5"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig3);
  const signOut = document.getElementById('logout');

signOut.addEventListener("click", function() {
  firebase.auth().signOut().then(function() {
    window.location.href = '/index.html';
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
});
