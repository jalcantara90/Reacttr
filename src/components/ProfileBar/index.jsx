import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './profilebar.css'

class ProfileBar extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div className={styles.root}>
        <Link to='/profile'>
          <figure>
            <img className={styles.avatar} src={this.props.picture}/>
          </figure>
        </Link>
        <span className={styles.username}>
          Hola @{this.props.username}!
        </span> 
        <button onClick={this.props.onOpenText} className={styles.button}>
          <span className='fa fa-lg fa-edit'></span>Tweet!
        </button>
      </div>
    )
  }
}

export default ProfileBar