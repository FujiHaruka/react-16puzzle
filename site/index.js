import React from 'react'
import { render } from 'react-dom'
import Header from './component/header'
import Puzzle from './component/puzzle'

const rootEl = document.getElementById('puzzle')
let puzzleData = '7d41fac90eb32658'

render((
  <div className='container-all'>
    <Header />
    <Puzzle initialArrangement={puzzleData}/>
  </div>
), rootEl)
