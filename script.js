// script.js

// ✅ Tumhara firebase config yaha paste karo
const firebaseConfig = {
  apiKey: "AIzaSyCWXIrGUj0848i0AW4o0T_asmFb-B6rdXk",
  authDomain: "aviator-4295c.firebaseapp.com",
  projectId: "aviator-4295c",
  storageBucket: "aviator-4295c.firebasestorage.app",
  messagingSenderId: "1004641033931",
  appId: "1:1004641033931:web:0fd393e04b5ab42f85854e",
  measurementId: "G-HPBKS2ZLEK"
};

// ✅ Firebase initialize karo
firebase.initializeApp(firebaseConfig);

// ✅ Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login success
      document.getElementById("login-section").style.display = "none";
      document.getElementById("predict-section").style.display = "block";
    })
    .catch((error) => {
      document.getElementById("login-error").innerText = "Invalid login";
    });
}

// ✅ Logout function
function logout() {
  firebase.auth().signOut().then(() => {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("predict-section").style.display = "none";
  });
}
