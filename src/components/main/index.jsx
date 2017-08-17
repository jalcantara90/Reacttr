import React, { Component, PropTypes } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

const propTypes = {
  user: PropTypes.object.isRequired
}

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] }),
      usernameToReply: '',
      messages: 
      [
        {
          id: uuid.v4(),
          text: 'Mensaje del Tweet',
          picture: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
          displayName: 'Jonathan Alcántara',
          username: 'jalcantara',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://scontent.fmad3-4.fna.fbcdn.net/v/t1.0-9/10410123_10205003754204428_638652949851853439_n.jpg?oh=d5d13e99bfe6f73e880834e7210c1561&oe=5A2D3A54',
          displayName: 'Jonathan Alcántara',
          username: 'jalcantara',
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ],
      onOpenText : false
    }

    this.handleOpentText = this.handleOpentText.bind(this);
    this.handleSendText = this.handleSendText.bind(this);
    this.handleCloseText = this.handleCloseText.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleonReplyTweet = this.handleonReplyTweet.bind(this);
  }

  handleOpentText (event) {
    event.preventDefault()

    this.setState(
      { 
        onOpenText: true,
        usernameToReply: ''
      })
  }

  renderOpenText () {
    if(this.state.onOpenText) {
      return (
        <InputText 
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          usernameToReply={this.state.usernameToReply}
        />
      )
    }
  }

  handleSendText (event) {
    event.preventDefault()

    let newMessage = {
      id: uuid.v4(),
      username: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: event.target.text.value,
      retweets: 0,
      favorites: 0
    }

    this.setState({
      messages: this.state.messages.concat(newMessage),
      onOpenText: false
    })
  }

  handleCloseText (event) {
    event.preventDefault()

    this.setState({ onOpenText: false })
  }

  handleFavorite (msgId) {
    let alreadyFavorited = this.state.user.favorites.filter( fav => fav === msgId)

    if (alreadyFavorited.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.favorites++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }

  handleRetweet (msgId) {
    let alreadyRetweeted = this.state.user.retweets.filter( retweet => retweet === msgId)
    if (alreadyRetweeted.length === 0) {
      let messages = this.state.messages.map(msg => {
        if ( msg.id === msgId ) {
          msg.retweets++
        }
        return msg
      })

      let user = Object.assign({} , this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages,
        user
      })
    }
  }


  handleonReplyTweet(msgId, usernameToReply) {
    this.setState({
      onOpenText: true,
      usernameToReply
    })
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
        <MessageList 
          messages={this.state.messages} 
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleonReplyTweet}
        />
      </div>
    )
  }
}

Main.propTypes = propTypes

export default Main