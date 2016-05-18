import React from 'react'
import Util from '../util/util'
import CONSTS from '../util/consts'

const Puzzle = React.createClass({
  propTypes: {},

  render () {
    let keys = Util.incrementalArray(1, 15)
    return (
      <div className='puzzle'>
        <div className='puzzle-board'>
          {keys.map(key =>
            <div className='piece' key={key}>
              <img className='piece-img' src='./img/flower.jpg' style={this.getPosition(key)} key={key} />
            </div>
          )}
          <div className='piece' >空</div>
        </div>
      </div>
    )
  },

  getPosition (key) {
    let index = (key + 15) % 16
    let top = Math.floor(index / 4)
    let left = index % 4
    let size = CONSTS.PIECE_SIZE
    let style = {
      top: `${-1 * top * size}px`,
      left: `${-1 * left * size}px`
    }
    return style
  }
})

export default Puzzle
