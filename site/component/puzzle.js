import React from 'react'
import Util from '../util/util'

const Puzzle = React.createClass({
  propTypes: {},

  render () {
    let keys = Util.incrementalArray(1, 15)
    return (
      <div className='puzzle'>
        <div className='puzzle-board'>
          {keys.map(key =>
            <div className='piece' key={key}>
              <img className='piece-img' src={`./img/piece${key}.png`} key={key} />
            </div>
          )}
        </div>
      </div>
    )
  }

})

export default Puzzle
