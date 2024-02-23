// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCLLVKQoXGKLuz6WIaLfxKmK7tZoDgxLc",
  authDomain: "http5214-5c53b.firebaseapp.com",
  projectId: "http5214-5c53b",
  storageBucket: "http5214-5c53b.appspot.com",
  messagingSenderId: "394940301759",
  appId: "1:394940301759:web:2b6a82c7ad2614ba21610a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, '/messages');

onValue(messages, (snapshot) => {
    
    const ul = document.getElementById("messages");
    
    console.log(snapshot);
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childData)
        const li = document.createElement("li");
        const text = document.createTextNode(childData.message);

        ul.appendChild(li);
        li.appendChild(text);
    });
}, {
    onlyOnce: false
})