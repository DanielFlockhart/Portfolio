import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCos1JQCsV4WGjjE19vEOd52QQBlCdot1g",
  authDomain: "portfolio-c71c8.firebaseapp.com",
  projectId: "portfolio-c71c8",
  storageBucket: "portfolio-c71c8.firebasestorage.app",
  messagingSenderId: "366775104871",
  appId: "1:366775104871:web:4f6fbbd1a253b9f43c6bc2",
  measurementId: "G-83BZ52D1EC",
};

export function getFirebaseClientApp() {
  return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
