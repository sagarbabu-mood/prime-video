import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div className="main-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
          />
        </div>
        <div className="slider-container">
          <MoviesSlider data={moviesList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
