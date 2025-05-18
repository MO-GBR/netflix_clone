import React from 'react'
import { AiOutlinePlayCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';

const MoviesDetails = ({
    movie: {
        title,
        name,
        vote_average,
        release_date,
        first_air_date,
        number_of_episodes,
        number_of_seasons,
        overview
    }
}) => {
  return (
    <div className='movie-container'>
        <h1 className='movie-title'>{ title || name }</h1>
        <p className='movie-info'>
            <span className='movie-rating'>Rating: {vote_average * 10}%</span>
            <br/>
            {`Release date: ${ first_air_date || release_date }`}
        </p>
        <p className='movie-episodes'>
            { number_of_episodes ? `Episodes: ${number_of_episodes}` : "" }
            { number_of_seasons ? `Seasons: ${number_of_seasons}` : "" }
        </p>
        <p className='movie-overview'>{overview}</p>
        <div className='movie-btnContaniner'>
            <button className='movie-btn movie-btn-Red'>
                <AiOutlinePlayCircle className='movie-btn-Icon' />
                Play
            </button>
            <button className='movie-btn'>
                <AiOutlineAppstoreAdd className='movie-btn-Icon' />
                My List
            </button>
        </div>
    </div>
  )
}

export default MoviesDetails