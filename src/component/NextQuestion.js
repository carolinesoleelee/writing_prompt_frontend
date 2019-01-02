import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NextQuestion extends Component{

  render(){
    return(
      <div className='nextDiv'>
      <p className='prev' onClick={(e) => {this.props.previousBatch(e)}}>
          Previous
      </p>
        <p className='next' onClick={(e) => {this.props.nextBatch(e)}}>
            Next
        </p ><br />
      </div>
        )
}
}
