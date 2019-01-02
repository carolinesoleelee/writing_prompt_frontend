import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class HomePageContainer extends Component{

  render(){
    console.log(this.props)
    let number = Math.floor(Math.random() * 313)
    return(
      <div className='Homepage'>
        <div>
        <img src='https://i.imgur.com/oRNCJx2.png' width='100%'></img>

        </div>

      <div>
      <br /><br />
      <h1>Writing Edifies <br />The Mind</h1>
      <p>If you want to become a better writer, the best thing you can do is practice writing every single day. Writing prompts are useful because we know sometimes it can be hard to think of what to write about! To help you brainstorm, we put together this list of 300+ writing prompts to give you something to write about daily and increase your writing potential.</p>

        {this.props.currentUser ? <div className='buts'>
              <Link className='item' to='/categories'>
              <button>Choose a Question</button>
              </Link>
              <Link className='item' to={`/questions/${number}`}>
              <button>Be Spontaneous</button>
              </Link>
        </div> : null}


      </div>

      </div>
    )
  }
}
