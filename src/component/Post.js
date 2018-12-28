import React, { Component } from 'react'

export default class Post extends Component{


  handleSubmit = (e) => {
    e.preventDefault()
      fetch('http://localhost:3001/api/v1/posts', {
        method: 'POST',
        headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
          user_id: 4,
          prompt_id: 1,
          text: 'hello'
        })
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }


render(){
    return(
      <div>

      <form onSubmit={this.handleSubmit}>
        <br />
          <textarea style={{ height: 400, width: 800}} type="textarea" name="name" />
        <br /><br />
          <input type="submit" value="Submit" />
      </form>


        <br /><br />
        <br /><br />
      </div>
    )
  }
}
