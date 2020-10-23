import React, { Component, useEffect } from 'react';
//import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
//import redux component
import{Provider}from "react-redux";
import store from "./store";
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Chat from './Components/chat/Chat';
import {createSession} from './actions/watson'

//import axios
import axios from 'axios';

if (localStorage.session) {
  axios.defaults.headers.common["session_id"]= localStorage.session;
}else{
  delete axios.defaults.headers.common["session_id"];
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
    if (!localStorage.session) {
      store.dispatch(createSession())
  }
  // useEffect(){
  //   //check if session exists
  //   if (!localStorage.session) {
  //     store.dispatch(createSession())
  //   }
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
     
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
       
        {/* <Provider store ={store}> */}
         <Chat store = {store}/>
        {/* </Provider> */}
     
        </div>
     
    );
  }
}

export default App;
