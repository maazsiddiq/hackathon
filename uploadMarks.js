import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-GUo7ks_jhG7Czp2bjW0yVO0vHyUkF6o",
  authDomain: "hackathon-b0577.firebaseapp.com",
  databaseURL: "https://hackathon-b0577-default-rtdb.firebaseio.com",
  projectId: "hackathon-b0577",
  storageBucket: "hackathon-b0577.appspot.com",
  messagingSenderId: "754799707372",
  appId: "1:754799707372:web:b9705ecb373cc0ca0251c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const course = document.getElementById("course");
const studentId = document.getElementById("studentId");
const marks = document.getElementById("marks");
const totalMarks = document.getElementById("totalMarks");
const cnic = document.getElementById("CNIC");

document
  .getElementById("upload-btn")
  .addEventListener("click", async function (e) {
    e.preventDefault();

    const form = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      cnic: cnic.value,
    };

    try {
      const admin = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const userId = admin.user.uid;

      await setDoc(doc(db, "students", userId), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        CNIC: form.cnic,
        userType: "student",
      });

      console.log("successfully");
    } catch (error) {
      console.error("Error:", error.message);
    }
  });
