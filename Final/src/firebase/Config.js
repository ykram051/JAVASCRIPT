import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCvBvOXZyxVoLvZqJDkOGfERbkFaWXsT8",
  authDomain: "um6p-course-df4f2.firebaseapp.com",
  projectId: "um6p-course-df4f2",
  storageBucket: "um6p-course-df4f2.appspot.com",
  messagingSenderId: "661353095202",
  appId: "1:661353095202:web:8ad0735050c4e74968aa7b"
};



firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };