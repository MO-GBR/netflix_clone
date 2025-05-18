import React from 'react'

const MoviesRow = ({ title, isNetflixMovies, movies, selectMovieHandler }) => {
  return (
    <div className='movies'>
        <h1 className='movies-title'>{title}</h1>
        <div className='movies-container'>
            {
                movies && movies.map((movie, index) => {
                    let movieImageUrl = isNetflixMovies
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

                    if (movie.poster_path && movie.backdrop_path !== null) {
                        return (
                            <div
                                onClick={() => selectMovieHandler(movie)}
                                className='movies-imgContainer'
                                key={index}
                            >
                                <img
                                    src={movieImageUrl}
                                    alt='movie'
                                    className='movies-img'
                                />
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default MoviesRow