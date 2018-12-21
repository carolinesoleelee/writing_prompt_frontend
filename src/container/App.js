import React, { Component } from 'react';
import '../App.css';
import Navbar from '../component/Navbar'
import QuestionsContainer from './QuestionsContainer'
import UsersContainer from './UsersContainer'
import HomePageContainer from './HomepageContainer'
import AnswerQuestion from '../component/AnswerQuestion'
import {Route} from 'react-router-dom'

class App extends Component {

  constructor(){
    super()
    this.state = {
      questions: [],
      selectedQuestion: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/prompts')
      .then(res => res.json())
      .then(questionData => this.setState({
        questions: questionData
      }))
  }

  selectQuestion = (obj) =>{
    this.setState({
        selectedQuestion: obj
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar className='NavColor'/>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/questions' render={() => {
          return <QuestionsContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
        }} />
        <Route exact path='/questions/:id' render={(props) => {
          let questionId = parseInt(props.match.params.id)
          return <AnswerQuestion answer={this.state.questions.find(q => q.id === questionId)} />
        }} />
      </div>
    );
  }
}

export default App;


//<QuestionsContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
