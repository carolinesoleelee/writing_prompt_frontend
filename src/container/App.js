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
import Category from '../component/Category'
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
    Promise.all([
      fetch('http://localhost:3001/api/v1/prompts'),
      fetch('http://localhost:3001/api/v1/posts')])
      .then(([res1, res2])=> Promise.all([res1.json(), res2.json()]))
      .then(([questionData, postData]) => this.setState({
        questions: questionData,
        posts: postData
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
      console.log(this.state.posts)
    return (
      <div className="App">
        <Navbar className='NavColor'/>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/user' component={UserProfile} />


        <Route exact path='/questions' render={() => {
          return <QuestionsContainer questionsArr={this.showTen()} select={this.selectQuestion} nextBatch={this.nextBatch} previousBatch={this.previousBatch}/>
        }} />
        <Route exact path='/questions/:id' render={(props) => {
          let questionId = parseInt(props.match.params.id)
          return <AnswerQuestion answer={this.state.questions.find(q => q.id === questionId)} /> }} />

        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/member' component={SignLogin} />

        <Route exact path='/categories' render={() => {
          return <CategoriesContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
        }} />
        <Route exact path='/categories/:category' render={(props) => {
          let cate = props.match.params.category
          return <Category category={this.state.questions ? this.state.questions.filter(cat => cat.category === cate) : null} select={this.selectQuestion} chosen={this.state.selectedQuestion}/> }} />
      </div>
    );
  }
}

export default App;


//<QuestionsContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
