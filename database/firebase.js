import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBGbFyjBeiEefN1pynZH_1wgEVO-swprSQ",
  authDomain: "reactnativeuniproject.firebaseapp.com",
  projectId: "reactnativeuniproject",
  storageBucket: "reactnativeuniproject.appspot.com",
  messagingSenderId: "462959334830",
  appId: "1:462959334830:web:32f9ead1cbf68b3e48643f",
  measurementId: "G-8M8FLQE051"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)


