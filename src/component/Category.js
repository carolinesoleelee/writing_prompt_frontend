import React, { Component } from 'react'
import CategoryQuestion from './CategoryQuestion'
import NextQuestion from '../component/NextQuestion'
import {Link} from 'react-router-dom'

export default class Category extends Component{


    state = {
      cat: this.props.category,
      index: 0,
    }


  showTen = () => {
    return (this.state.cat.slice(this.state.index, this.state.index + 8))
  }

  nextBatch = () => {
    this.setState({
      index: this.state.index + 8
    })
  }

  previousBatch = () => {
    this.setState({
      index: this.state.index - 8
    })
  }

  render(){
      console.log(this.showTen())
    return(
      <div>
      <div className='catTitle'><strong><p className='ptag2'>{this.props.chosen.category}</p></strong>
            <NextQuestion nextBatch={this.nextBatch} previousBatch={this.previousBatch}/>
      </div>
      <div className='line2'></div>
      <div className='cattext2'>{this.showTen().map((data, index)=> <CategoryQuestion key={index} obj={data} select={this.props.select}/>)}</div>
      <br /><br /><div className='line2'></div>
        <Link to='/categories'><button>Go Back</button></Link>
      </div>
    )
  }
}
