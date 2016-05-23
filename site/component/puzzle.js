import React from 'react'
import Util from '../util/util'
import Piece from './piece'

const Puzzle = React.createClass({
  propTypes: {
    initialArrangement: React.PropTypes.string,
    ids: React.PropTypes.array
  },

  getDefaultProps () {
    return {
      ids: Util.incrementalNumbers(1, 15)
    }
  },

  getInitialState () {
    let {initialArrangement} = this.props
    let arrangement = initialArrangement.split('').map(char => Number(parseInt(char, 16)))
    return {
      arrangement
    }
  },

  render () {
    let {ids} = this.props
    return (
      <div className='puzzle'>
        <div className='puzzle-board'>
          {ids.map(id =>
            <Piece pieceId={id}
                   key={id}
                   positionNumber={this.calcPositionNumber(id)}
                   onClick={this.onClickPiece}
                   data={id}/>
          )}
        </div>
      </div>
    )
  },

  componentDidUpdate () {
    if (this.isCongratulation()) {
      window.alert('congratulation')
    }
  },

  onClickPiece (event) {
    let pieceId = Number(event.currentTarget.attributes.data.value)
    if (this.canMove(pieceId)) {
      this.move(pieceId)
    }
  },

  /**
   * positon number
   * 0123
   * 4567
   * 89ab
   * cdef
   */
  calcPositionNumber (pieceId) {
    return this.state.arrangement.indexOf(pieceId)
  },

  canMove (pieceId) {
    let {arrangement} = this.state
    let zeroIndex = arrangement.indexOf(0)
    let pieceIndex = arrangement.indexOf(pieceId)
    let difAbs = Math.abs(pieceIndex - zeroIndex)
    return difAbs === 1 || difAbs === 4
  },

  move (pieceId) {
    let {arrangement} = this.state
    let zeroIndex = arrangement.indexOf(0)
    let pieceIndex = arrangement.indexOf(pieceId)
    let swapped = [].concat(arrangement)
    swapped[zeroIndex] = pieceId
    swapped[pieceIndex] = 0
    this.setState({
      arrangement: swapped
    })
  },

  isCongratulation () {
    let {ids} = this.props
    let {arrangement} = this.state
    return ids.every((number, i) => number === arrangement[i])
  }
})

export default Puzzle
