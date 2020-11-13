import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config ={
   
        apiKey: "AIzaSyDO8Dpbk_u0g9xDBNS5awOkVnRIJo3cfNU",
        authDomain: "myappdb-84816.firebaseapp.com",
        databaseURL: "https://myappdb-84816.firebaseio.com",
        projectId: "myappdb-84816",
        storageBucket: "myappdb-84816.appspot.com",
        messagingSenderId: "1073086528194",
        appId: "1:1073086528194:web:acec10ed731237dada595b",
        measurementId: "G-KSEH07HR49"
     
    
};



firebase.initializeApp(config);
export default firebase;