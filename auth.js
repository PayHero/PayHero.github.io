// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClzeymR4EUfNRztyjvyPlhcuz2RMNiDE0",
  authDomain: "woo-consolidated.firebaseapp.com",
  projectId: "woo-consolidated",
  storageBucket: "woo-consolidated.appspot.com",
  messagingSenderId: "593730434028",
  appId: "1:593730434028:web:b35c46dd946941898b86c9",
  measurementId: "G-VR9WHYVQGY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
document.getElementById('login-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to dashboard after successful login
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert('Login error: ' + error.message);
    });
});

// Signup function
document.getElementById('signup-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Signup successful! Redirecting to dashboard...');
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert('Signup error: ' + error.message);
    });
});
