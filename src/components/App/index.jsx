import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
      user: {
        photoURL: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
        email: 'jalcantara1990@gmail.com',
        displayName: 'Jonathan Alcántara',
        onOpenText: false,
        location: 'Barcelona, España'
      }
    }

    this.handleOnAuth = this.handleOnAuth.bind(this)
  }

  handleOnAuth () {
    console.log('Auth')
  }

  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path='/' render={ () => {
            if (this.state.user) {
              return(
                <Main user={this.state.user}/>
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