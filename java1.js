
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBz5ovIm75ttSs1VbUCGpNuXQIeNEBa5Rw",
    authDomain: "emptech-405d0.firebaseapp.com",
    projectId: "emptech-405d0",
    storageBucket: "emptech-405d0.appspot.com",
    messagingSenderId: "218178515954",
    appId: "1:218178515954:web:98ae8ae181ab52cbf8f16b"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


document.getElementById("commentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    const commentRef = push(ref(db, "comments/"));

    set(commentRef, {
        fullName: name,
        email: email,
        comment: comment,
        timestamp: Date.now()
    }).then(() => {
        alert("Comment saved!");
    }).catch((error) => {
        alert("Error: " + error);
    });
});