import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom'
import Movies from './Movies'
import Files from './Files'

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
              
      <Switch>
        <Route path='/movies'>

         <Movies />
         
        </Route>
        <Route path='/'>
         
          <Files/>
        </Route>
      </Switch>
    
    </div>
    </Router>
  )
}

export default App
