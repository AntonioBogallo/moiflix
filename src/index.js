import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore/lite";
// import "dotenv/config";

const firebaseConfig = {
  apiKey: "AIzaSyA_SrpwhVXV8Xf-ky4SmKbmYo49rmngx0w",
  authDomain: "test-firestore-67033.firebaseapp.com",
  projectId: "test-firestore-67033",
  storageBucket: "test-firestore-67033.appspot.com",
  messagingSenderId: "348535956178",
  appId: "1:348535956178:web:b4ef1c0e198d4ce217830b"
};

const db = getFirestore(initializeApp(firebaseConfig));
/********************************************/
const snap = await getDocs(collection(db, "movies"));
console.log(snap);
const main = document.querySelector(".main");

(await snap).forEach(element => {
  const div = document.createElement("div");
  div.classList.add("pelicula");

  div.innerHTML = /* html */`
    <img src="${element.data().posterUrl}" alt="poster">
    <h1>${element.id}</h1>
  `;
  main.appendChild(div);
});
