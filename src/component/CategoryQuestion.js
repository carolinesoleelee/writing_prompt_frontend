import React, { Component } from 'react'


export default class CategoryQuestion extends Component{


  render(){
    console.log(this.props.obj.question)
    return(
      <div>
      {this.props.obj.question}
      </div>
    )
  }
}
