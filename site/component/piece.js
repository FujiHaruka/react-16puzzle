import React from 'react'
import CONSTS from '../util/consts'
import Util from '../util/util'

const Piece = React.createClass({
  propTypes: {
    pieceId: React.PropTypes.number
  },

  getInitialState () {
    let s = this
    let ids = Util.incrementalArray(1, 15)
    let position = ids.reduce((style, id) =>
      Object.assign(style, {[id]: s.getDefaultPosition(id)}), {})
    return {position}
  },

  render () {
    let {pieceId} = this.props
    let view = this.getView(pieceId)
    let position = this.state.position[pieceId]
    return (
      <div className='piece' onClick={this.onClick} style={position} data={pieceId}>
        <img className='piece-img' src='./img/flower.jpg' style={view}/>
      </div>
    )
  },

  /**
   * x, yは座標。左からx番目、上からy番目。0から始まる。
   */
  getDefaultPosition (pieceId) {
    let x = this.idToX(pieceId)
    let y = this.idToY(pieceId)
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
  },

  onClick (event) {
    let id = event.currentTarget.attributes.data.value
    // とりあえず
    let piecePosition = {
      transition: 'all 0.5s ease',
      top: 0,
      left: 0
    }
    let position = Object.assign({}, this.state.position, {[id]: piecePosition})
    this.setState({position})
  },

  idToX (id) {
    // とりあえず
    return (id + 3) % 4
  },

  idToY (id) {
    // とりあえず
    return Math.floor((id - 1) / 4)
  }
})

export default Piece
