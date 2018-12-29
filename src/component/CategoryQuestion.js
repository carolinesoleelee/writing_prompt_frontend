import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CategoryQuestion extends Component{

  render(){
    console.log(this.props.obj)
    return(
      <Link className='item' to={`/questions/${this.props.obj.id}`}>
      <div onClick={(e)=> this.props.select(this.props.obj)}>
      <button>{this.props.obj.question}</button>
      </div>
      </Link>
    )
  }
}
