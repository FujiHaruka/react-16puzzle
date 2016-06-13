import React from 'react'
import Header from './header'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

export default App
