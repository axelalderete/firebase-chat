import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3bvEXx8ElIkPAfxF9LVBNzLSemajqIyw",
    authDomain: "firechat-5878b.firebaseapp.com",
    projectId: "firechat-5878b",
    storageBucket: "firechat-5878b.appspot.com",
    messagingSenderId: "64199671679",
    appId: "1:64199671679:web:d891481a405d48d95ce44a",
    measurementId: "G-FWD8S2LPMC"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }