import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje del Tweet',
          picture: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
          displayName: 'Jonathan Alcántara',
          username: 'jalcantara',
          date: Date.now() - 180000
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
          displayName: 'Jonathan Alcántara',
          username: 'jalcantara',
          date: Date.now() - 1800000
        }
      ],
      onOpenText : false
    }

    this.handleOpentText = this.handleOpentText.bind(this);
  }

  handleOpentText (event) {
    event.preventDefault()

    this.setState({ onOpenText: true })
  }

  renderOpenText () {
    if(this.state.onOpenText) {
      return <InputText />
    }
  }

  render() {
    return(
      <div>
        <ProfileBar 
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpentText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main