import React from 'react'
import { Link } from 'react-router'

const Header = React.createClass({
  render () {
    return (
      <div className='header'>
        <div className='header-container'>
          <h1 id='header-title'>16 Puzzle</h1>
          <ul>
            <li><Link to='/'>パズル</Link></li>
            <li><Link to='/upload' >画像アップロード</Link></li>
          </ul>
        </div>
      </div>
    )
  }
})

export default Header
