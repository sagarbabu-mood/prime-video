import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  }
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  }
  return (
    <>
      <div className="carousel-slider">
        <h1 className="slider-heading">Action Movies</h1>
        <Slider {...settings} className="slider">
          {data.map(eachObj => {
            if (eachObj.categoryId === 'ACTION') {
              return <MovieItem data={eachObj} key={eachObj.id} />
            }
            return null
          })}
        </Slider>
      </div>
      <div className="carousel-slider">
        <h1 className="slider-heading">Comedy Movies</h1>
        <Slider {...settings2} className="slider">
          {data.map(eachObj => {
            if (eachObj.categoryId === 'COMEDY') {
              return <MovieItem data={eachObj} key={eachObj.id} />
            }
            return null
          })}
        </Slider>
      </div>
    </>
  )
}

export default MoviesSlider
