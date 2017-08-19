import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from 'firebase'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../login'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
        console.log(user)
      } else {
        this.setState({ user: null })
      }
    })
  }

  handleOnAuth () {
    const provider = new firebase.auth.GithubAuthProvider()

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log( `Error: ${error.code}: ${error.message}`))
  }

  handleLogOut () {
    firebase.auth().signOut()
      .then( () => console.log('Te has desconectado correctamente'))
      .catch( () => console.error('Un Error ocurrió'))
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={ () => {
            if (this.state.user) {
              return(
                <Main 
                  user={this.state.user}
                  onLogOut={this.handleLogOut}
                />
              )
            }else {
              return(
                <Login onAuth={this.handleOnAuth} />
              )
            }
          }} />
          <Route path='/profile' render={ () => (
         
              <Profile 
                picture={this.state.user.photoURL}
                displayName={this.state.user.displayName}
                emailAddress={this.state.user.email}
                username={this.state.user.email.split('@')[0]}
                location={this.state.user.location}
              />
            
          )}/>
          <Route path='/user/:username' render={({ match }) => {
            return (
              <Profile
                displayName={match.params.username}
                username={match.params.username}
              />
            )
          }} />
        </div>
      </Router>
    )
  }
}

export default App