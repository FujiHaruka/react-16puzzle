import React from 'react'
import Dropzone from 'react-dropzone'
import Util from '../util/util'

const Uploader = React.createClass({
  propTypes: {},

  getDefaultProps () {
    return {}
  },

  getInitialState () {
    return {img: ''}
  },

  render () {
    return (
      <div className='uploader'>
        <h2>this is uploader</h2>
        <Dropzone onDrop={this.onDrop} multiple={false} accept={'image/*'}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <img src={this.state.img} />
      </div>
    )
  },

  componentDidUpdate () {
  },

  onDrop: function (files) {
    // こんな感じでプレビューもできる
    console.log('Received files: ', files)
    this.setState({img: files[0].preview})
  }
})

export default Uploader
