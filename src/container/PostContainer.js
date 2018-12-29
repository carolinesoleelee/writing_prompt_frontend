import React, { Component } from 'react'

export default class PostContainer extends Component{

  render(){
    return(
      <div>
      {this.props.answer ? this.props.answer.question : null}<br /><br />
      {this.props.answer ? this.props.answer.posts[0].text : null}
      </div>
    )
  }
}
