import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CategoryQuestion extends Component{

  render(){
    return(
      <Link className='item' to={`/questions/${this.props}`}>
      <div onClick={(e)=> this.props.select(this.props.obj)}>
      <button>{this.props.obj.question}</button>
      </div>
      </Link>
    )
  }
}
