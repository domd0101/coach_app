import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC1mO4FZVpCK8ZGh_ZT1wh6kxjAkrF9m2o",
    authDomain: "coachreact-3fd6f.firebaseapp.com",
    databaseURL: "https://coachreact-3fd6f.firebaseio.com",
    projectId: "coachreact-3fd6f",
    storageBucket: "",
    messagingSenderId: "929815711699"
  };


  export const firebaseApp = firebase.initializeApp(config)

  export const goalRef = firebase.database().ref('goals')
