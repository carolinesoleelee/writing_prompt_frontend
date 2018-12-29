import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class IndividualPost extends Component {
  render(){
    console.log(this.props.data)
    return(
      <div>
      <button>{this.props.data.prompt_id}:{this.props.data.text}</button>
      </div>
    )
  }
}
