import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='row'>
            <div className='col-10'>
              Main Page goes here.
            </div>
            <div className='col-2 text-right'>
              <Button variant='contained'>Main Page</Button>
            </div>
          </div>
        </Route>
          <Route exact path='/reviews'>
            Review page goes here
        </Route>
          <Route exact path='/login'>
            Login page goes here
        </Route>
          <Route path='/'>
            404 Page not found.
        </Route>
      </Switch>
    </Router>
  )
}

export default App;