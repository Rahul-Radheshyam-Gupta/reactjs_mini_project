import { render } from '@testing-library/react';
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Game from '../functionalComponents/game'
import Navigation from '../PageComponent/Navigation';

const lightTheme = {
  body: 'white',
  text: 'black',
  toggleBorder: 'white',
  background: '#ddd',
  height:"fit-content",
  minHeight:"100vh"
}
const darkTheme = {
  body: 'black',
  text: 'white',
  toggleBorder: 'black',
  background: 'rgba(0,0,0,0.8)',
  color:'black',
  height:"fit-content",
  minHeight:"100vh"

}
const lightThemeBtn = {
  color:'white',
  position:'fixed',
  bottom:'5%',
  right:'3%',
  border:'1px solid black 0.9',
  borderRadius:'50%',
  fontSize:'1.25rem',
  background:'rgba(0,0,0,0.8)',
  zIndex:'9',
  transition:'2s ease'
}
const darkThemeBtn = {
  color:'white',
  position:'fixed',
  bottom:'5%',
  right:'3%',
  border:'1px solid white 1',
  borderRadius:'50%',
  fontSize:'1.25rem',
  background:'rgba(0,0,0,0.8)',
  zIndex:'9',
  transition:'2s ease'
}

class Dashboard extends React.Component{
    constructor(){
      super();
      this.state = {
        isDarkMode:false
      }
    }
    darkModeHandling = ()=> {
      console.log("before ", this.state.isDarkMode);
      this.setState({
        isDarkMode:!this.state.isDarkMode
      })
      console.log("after ", this.state.isDarkMode);
    }
    render(){
        return (
          <div style={ this.state.isDarkMode ? darkTheme : lightTheme } className={ this.state.isDarkMode ? 'darkTheme' : 'lightTheme' } >
            <span onClick={ ()=>{ this.darkModeHandling() } } className='btn btn-sm border-0' style={ this.state.isDarkMode ? darkThemeBtn : lightThemeBtn }>{ this.state.isDarkMode ? <i class="bi bi-sun"></i> : <i class="bi bi-moon"></i> }</span>
            <Routes>
              <Route exact path="/" element={<Home />}>
                
              </Route>
              <Route path="/tictoe" element={<Game isDarkMode={this.state.isDarkMode} />}>
               
              </Route>
              <Route path="/django_projects" element={<Contact />}>
               
              </Route>
            </Routes>
          </div>
        );
    }
}
export default Dashboard;