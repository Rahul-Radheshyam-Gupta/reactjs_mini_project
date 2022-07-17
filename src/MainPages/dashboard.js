import { render } from '@testing-library/react';
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Game from '../functionalComponents/game'
import Navigation from '../PageComponent/Navigation';
class Dashboard extends React.Component{
    render(){
        return (
          <div>
            <div marginBottom="30px">
                <Navigation />
            </div>
            <Routes>
              <Route exact path="/" element={<Home />}>
                
              </Route>
              <Route path="/tictoe" element={<Game />}>
               
              </Route>
              <Route path="/django_projects" element={<Contact />}>
               
              </Route>
            </Routes>
          </div>
        );
    }
}
export default Dashboard;