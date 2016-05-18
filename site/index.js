import React from 'react'
import { render } from 'react-dom'
import Header from './component/header'
import Puzzle from './component/puzzle'

const rootEl = document.getElementById('puzzle')

render((
  <div className='container-all'>
    <Header />
    <Puzzle />
  </div>
), rootEl)
