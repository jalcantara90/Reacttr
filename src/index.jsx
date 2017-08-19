import React, { Component } from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyB_E5g8k1v5YqCzdlffxDZs3c7u4h-9IS8',
  authDomain: 'curso-react-8126d.firebaseapp.com',
  databaseURL: 'https://curso-react-8126d.firebaseio.com',
  projectId: 'curso-react-8126d',
  storageBucket: 'curso-react-8126d.appspot.com',
  messagingSenderId: '422819965525'
})

import App from './components/App'

render(<App />, document.getElementById('root'))