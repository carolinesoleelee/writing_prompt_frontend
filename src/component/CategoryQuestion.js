import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CategoryQuestion extends Component{

  render(){
    return(
      <Link className='item' to={`/questions/${this.props.obj.id}`}>
      <div className='cattext3' onClick={(e)=> this.props.select(this.props.obj)}>
      <>{this.props.obj.question}</>
      </div>
      </Link>
    )
  }
}
