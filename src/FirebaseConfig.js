import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAyl1XpG_70nmrpmEiA2uFhJYC6AAEtVpI",
    authDomain: "event-vue.firebaseapp.com",
    databaseURL: "https://event-vue.firebaseio.com",
    projectId: "event-vue",
    storageBucket: "event-vue.appspot.com",
    messagingSenderId: "412285542220"
  };

export const FirebaseConfig = Firebase.initializeApp(config);

export const EventRef = Firebase.database().ref().child('events');