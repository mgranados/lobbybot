import React from 'react'
import { connect } from 'react-redux'
import { sessionActions } from 'core/session'
import Dropzone from 'react-dropzone'

class ImageDropzone extends React.Component {
  onDrop ([file]) {
    const { updateAvatar } = this.props
    if (!file) return

    const reader = new window.FileReader()
    reader.onload = (e) => {
      updateAvatar({avatar: e.target.result})
    }
    reader.readAsDataURL(file)
  }

  render () {
    const { label, defaultImage } = this.props
    const dropzoneStyle = {
      backgroundImage: `url(${defaultImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: 200,
      height: 200,
      backgroundPosition: 'center center'
    }

    const labelStyle = {
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.34)',
      width: 200,
      height: 200,
      borderStyle: 'dashed',
      paddingTop: 85
    }

    return (<div style={dropzoneStyle}>
      <Dropzone ref='dropzone'
        key='image-uploader'
        maxSize={10000000}
        accept={'image/*'}
        onDrop={this.onDrop = this.onDrop.bind(this)}
        multiple={false}
        style={labelStyle}
      >
        <div>{ label }</div>
      </Dropzone>
    </div>)
  }
}

const mapStateToProps = function (state) {
  return state.session
}

const mapDispatchToProps = {
  updateAvatar: sessionActions.updateAvatar
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageDropzone)
