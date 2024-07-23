<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVE76La_V55BjauRYb6WqBK0-_-44fyJQ",
    authDomain: "proyectodecampo-de910.firebaseapp.com",
    projectId: "proyectodecampo-de910",
    storageBucket: "proyectodecampo-de910.appspot.com",
    messagingSenderId: "442211422362",
    appId: "1:442211422362:web:3c15d7029222c6b2a3cf23",
    measurementId: "G-TH885BMM2K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>