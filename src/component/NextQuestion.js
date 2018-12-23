import React, { Component } from 'react'

export default class NextQuestion extends Component{

  render(){
    return(
      <div>
      <button onClick={(e) => {this.props.previousBatch(e)}}>
          Prev 5
      </button>

        <button onClick={(e) => {this.props.nextBatch(e)}}>
            Next 5
        </button>
      </div>
        )
}
}
