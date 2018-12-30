import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class IndividualPost extends Component {
  render(){
    return(
      <Link to={`/user/${this.props.data.prompt_id}`}>
        <div onClick={(e)=> this.props.selectedQuestion(this.props.data.id)}>
          <button>{this.props.data.prompt_id}:{this.props.data.text}</button>

        </div>
      </Link>
    )
  }
}


        // <div onClick={(e)=> this.props.selectedQuestion(this.props.data)}>
