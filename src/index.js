//import react 
import React from 'react';
import ReactDOM from 'react-dom';
//style from index.css
import './index.css';
//import components 
import Title_banner from './components/title_banner/title_banner.js';
import Sections from './components/sections/sections.js';
import Project from './components/projects/project.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <div className='app'>
          <Title_banner/>
          <Sections/>
          <Project/>
        </div>
      </div>
    )
  }
}

// Render Sections
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


