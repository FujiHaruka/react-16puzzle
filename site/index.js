import React from 'react'
import { render } from 'react-dom'
import App from './component/app'
import Puzzle from './component/puzzle'
import Uploader from './component/uploader'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const rootEl = document.getElementById('puzzle')

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Puzzle} />
      <Route path='/upload' component={Uploader} />
    </Route>
  </Router>
), rootEl)
