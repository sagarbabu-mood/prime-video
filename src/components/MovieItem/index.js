import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data
  //   console.log(data)

  return (
    <Popup
      trigger={
        <img src={thumbnailUrl} alt="thumbnail" className="carorsel-img" />
      }
      modal
    >
      {close => (
        <div className="popup-modal-container">
          <div className="popup-modal-button-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close btn"
              onClick={close}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="react-player-card">
            <ReactPlayer url={videoUrl} className="video-player" />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
