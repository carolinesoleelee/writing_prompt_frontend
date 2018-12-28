import React, { Component } from 'react';
import '../App.css';
import Navbar from '../component/Navbar'
import QuestionsContainer from './QuestionsContainer'
import HomePageContainer from './HomepageContainer'
import AnswerQuestion from '../component/AnswerQuestion'
import UserProfile from '../component/UserProfile'
import {Route} from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import SignLogin from './SignLogin'
import CategoriesContainer from './CategoriesContainer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      questions: [],
      selectedQuestion: {},
      index: 0,
      posts: [],
      selectedUser: {}
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

  nextBatch = () => {
    this.setState({
      index: this.state.index + 5
    })
  }

  previousBatch = () => {
    this.setState({
      index: this.state.index - 5
    })
  }

  showTen = () => {
    return (this.state.questions.slice(this.state.index, this.state.index + 5))
  }

  render() {
    return (
      <div className="App">
        <Navbar className='NavColor'/>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/questions' render={() => {
          return <QuestionsContainer questionsArr={this.showTen()} select={this.selectQuestion} nextBatch={this.nextBatch} previousBatch={this.previousBatch}/>
        }} />
        <Route exact path='/user' component={UserProfile} />
        <Route exact path='/questions/:id' render={(props) => {
          let questionId = parseInt(props.match.params.id)
          return <AnswerQuestion answer={this.state.questions.find(q => q.id === questionId)} /> }} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/member' component={SignLogin} />
        <Route exact path='/categories/:category' render={(props) => {
          let cate = props.match.params.category
          return <CategoriesContainer category={this.state.questions ? this.state.questions.filter(cat => cat.category === cate) : null}/> }} />
      </div>
    );
  }
}

export default App;


//<QuestionsContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
