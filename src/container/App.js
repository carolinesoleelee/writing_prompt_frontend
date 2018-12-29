import React, { Component } from 'react';
import '../App.css';
import Navbar from '../component/Navbar'
import QuestionsContainer from './QuestionsContainer'
import HomePageContainer from './HomepageContainer'
import AnswerQuestion from '../component/AnswerQuestion'
import UserProfile from '../component/UserProfile'
import {Route, Redirect} from 'react-router-dom'
import LoginForm from '../component/LoginForm'
import Category from '../component/Category'
import CategoriesContainer from './CategoriesContainer'
import SignUp from '../component/SignUp'

class App extends Component {

  constructor(){
    super()
    this.state = {
      questions: [],
      selectedQuestion: {},
      index: 0,
      posts: [],
      selectedUser: {},
      currentUser: null,
      users: []
    }
  }

  componentDidMount(){
    Promise.all([
      fetch('http://localhost:3001/api/v1/prompts'),
      fetch('http://localhost:3001/api/v1/posts'),
      fetch('http://localhost:3001/api/v1/users')])
      .then(([res1, res2, res3])=> Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([questionData, postData, userData]) => this.setState({
        questions: questionData,
        posts: postData,
        users: userData
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

  setCurrentUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }




  render() {
    return (
      <div className="App">
        <Navbar className='NavColor'/>
        <Route exact path='/' component={HomePageContainer}/>
        <Route exact path='/user' render={() =>  <UserProfile userObj={this.state.users ? this.state.users.filter(data => data.id === this.state.currentUser.id) : null} currentUser={this.state.currentUser}
         />} />
         <Route exact path="/login" render={() => this.state.loading ? null : (this.state.currentUser ?
            <Redirect to="/user" /> :
            <LoginForm setCurrentUser={this.setCurrentUser}/> )}
          />

        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/questions' render={() => {
          return <QuestionsContainer questionsArr={this.showTen()} select={this.selectQuestion} nextBatch={this.nextBatch} previousBatch={this.previousBatch}/>
        }} />
        <Route exact path='/questions/:id' render={(props) => {
          let questionId = parseInt(props.match.params.id)
          return <AnswerQuestion answer={this.state.questions.find(q => q.id === questionId)} currentUser={this.state.currentUser}/> }} />
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
// <Route exact path="/login" render={() => this.state.loading ? null : (this.state.currentUser ?
//     <Redirect to="/user" /> :
//     <LoginForm setCurrentUser={this.setCurrentUser}/> )}
//   />

//<QuestionsContainer questionsArr={this.state.questions} select={this.selectQuestion}/>
