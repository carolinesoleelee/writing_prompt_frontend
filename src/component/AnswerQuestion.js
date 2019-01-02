import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class AnswerQuestion extends Component{

  state = {
    text: '',
    redirect: false,
    num: this.props.selectedQuestion.id
  }

  random = () => {
    this.setState({
      num: (Math.floor(Math.random() * (312)))
    })
  }
  //GET THIS FIXED YOURE SO CLOSE, SHOW UNDEFINED
  //ALSO ASK ABOUT THE FACT THAT
  //YOUR HARD REFRESH MESSES THINGS US
  //YOU ALSO HAVE TO HARD REFRESH EVERYTHING TO MAKE
  //POSTS APPEAR
  //UPDATE WITH THE ORIGINAL WORDS ASK MARRISA
  //MAYBE YOU CAN PASS DATA FROM THE URL
  //ASK IMAN ABOUT TIME READ ON POST
  //

  handleChange = (e) =>{
      let input = (e.target.value)
      this.setState({ text: input})
  }

  handleSubmit = (e) => {
    e.preventDefault()
      fetch('http://localhost:3001/api/v1/posts', {
        method: 'POST',
        headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
          user_id: this.props.currentUser.id,
          prompt_id: this.props.answer.id,
          text: this.state.text
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
      this.setState({ redirect: true})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/user' />
    }
  }

  render(){
    return(
      <div className='post'>


      <br />
      <br />
      {this.props.answer ? <div className='cattext5'>{this.props.answer.question} </div > : null}
      {this.renderRedirect()}
      <form onSubmit={this.handleSubmit}>
        <br />
          <textarea className='box'placeholder='Your insight shall go here' onChange={this.handleChange} style={{ height: 350, width: 650}} type="textarea" name="name" />
        <br /><br />
          <input className='submit' type="submit" value="Submit"/>
      </form>
        <br /><br />
        <br /><br />
      </div>

    )
  }
}
