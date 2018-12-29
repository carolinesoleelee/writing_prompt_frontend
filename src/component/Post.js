import React, { Component } from 'react'

export default class Post extends Component{

  state = {
    text: ''
  }

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
          prompt_id: 1,
          text: this.state.text
        })
      })
      .then(res => res.json())
      .then(data => data)
  }


render(){
  console.log(this.props)
    return(
      <div>

      <form onSubmit={this.handleSubmit}>
        <br />
          <textarea placeholder='insert text here' onChange={this.handleChange} style={{ height: 400, width: 800}} type="textarea" name="name" />
        <br /><br />
          <input type="submit" value="Submit"/>
      </form>


        <br /><br />
        <br /><br />
      </div>
    )
  }
}
