import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        photoURL: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
        email: 'jalcantara1990@gmail.com',
        onOpenText: false
      }
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App