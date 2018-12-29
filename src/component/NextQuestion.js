import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NextQuestion extends Component{

  render(){
    return(
      <div>
      <button onClick={(e) => {this.props.previousBatch(e)}}>
          Prev 5
      </button>

        <button onClick={(e) => {this.props.nextBatch(e)}}>
            Next 5
        </button><br />

        <Link className='item' to='/categories'><button>Go To Categories</button></Link>
      </div>
        )
}
}
