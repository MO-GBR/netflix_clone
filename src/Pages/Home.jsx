import React, {useState} from 'react'
import { MovieModel } from '../Components/MovieModel'
import MoviesDetails from '../Components/MoviesDetails'
import Movies from '../sections/Movies'

const Home = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ movieDetail, setMovieDetail ] = useState({});

    const selectMovieHandler = (movie) => {
        setToggle(true);
        setMovieDetail(movie);
    };

    const close = () => {
        setToggle(false)
    };

    console.log(movieDetail);
  return (
    <>
        <div>
            <Movies selectMovieHandler={selectMovieHandler} />
            <MovieModel
                show={toggle}
                closed={close}
                backgroundImage={movieDetail.backdrop_path}
            >
                <MoviesDetails movie={movieDetail} />
            </MovieModel>
        </div>
    </>
  )
}

export default Home