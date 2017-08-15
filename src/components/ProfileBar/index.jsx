import React, { Component } from 'react'
import styles from './profilebar.css'

class ProfileBar extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div className={styles.root}>
        <figure>
          <img className={styles.avatar} src={this.props.picture}/>
        </figure>
        <span className={styles.username}>
          Hola @{this.props.username}!
        </span> 
        <button onClick={this.props.onOpenText} className={styles.button}>
          <span className='fa fa-lg fa-edit'>Tweet!</span> 
        </button>
      </div>
    )
  }
}

export default ProfileBar