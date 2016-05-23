import React from 'react'
import CONSTS from '../util/consts'
import Util from '../util/util'

const Piece = React.createClass({
  propTypes: {
    pieceId: React.PropTypes.number,
    onClick: React.PropTypes.function, // なぜか警告が出る
    positionNumber: React.PropTypes.number
  },

  render () {
    let {pieceId} = this.props
    let view = this.getView(pieceId)
    let position = this.getPositionStyle()
    return (
      <div className='piece' style={position} data={pieceId} onClick={this.props.onClick}>
        <img className='piece-img' src='./img/flower.jpg' style={view}/>
      </div>
    )
  },

  /*
   * positionNumberから計算
   */
  getPositionStyle () {
    let {positionNumber} = this.props
    let x = positionNumber % 4
    let y = Math.floor(positionNumber / 4)
    let size = CONSTS.PIECE_SIZE
    let left = x * size
    let top = y * size
    let positionStyle = {
      top: `${top}px`,
      left: `${left}px`
    }
    return positionStyle
  },

  getView (pieceId) {
    let index = (pieceId + 15) % 16
    let top = Math.floor(index / 4)
    let left = index % 4
    let size = CONSTS.PIECE_SIZE
    let viewStyle = {
      top: `${-1 * top * size}px`,
      left: `${-1 * left * size}px`
    }
    return viewStyle
  }
})

export default Piece
