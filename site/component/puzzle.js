import React from 'react'
import Util from '../util/util'
import Piece from './piece'

const Puzzle = React.createClass({
  propTypes: {},

  render () {
    let keys = Util.incrementalArray(1, 15)
    return (
      <div className='puzzle'>
        <div className='puzzle-board'>
          {keys.map(key =>
            <Piece pieceId={key} key={key} />
          )}
        </div>
      </div>
    )
  }
})

export default Puzzle
