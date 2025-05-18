import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMovieDetails, getSearchMovie } from '../Redux/Actions/movieAction';
import MoviesDetails from '../Components/MoviesDetails';
import { MovieModel } from '../Components/MovieModel';
import useDebounce from '../Hooks/useDebounce';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Search = () => {
    const dispatch = useDispatch();
    const query = useQuery();

    const debouncedSearchTerm = useDebounce(query.get('q'), 500);

    const [ isToggle, setIsToggle ] = useState(false);

    const {
        searchMovies,
        movieDetails,
        isFetching
    } = useSelector((state) => state.movie);

    const closeHandler = () => {
        setIsToggle(false);
    };

    const onSelectMovieHandler = (movie) => {
        getMovieDetails(dispatch, movie.media_type, movie.id);
        setIsToggle(true);
    }

    useEffect(() => {
        if(debouncedSearchTerm) getSearchMovie(dispatch, debouncedSearchTerm);
    }, [debouncedSearchTerm]);
  return searchMovies.length > 0 ? (
    <div className='search'>
        <div className='moviesSearch'>
            {
                searchMovies.map((movie, index) => {
                    if (movie.backdrop_path !== null && movie.media_type !== 'person') {
                        const movieImageUrl =`https://image.tmdb.org/t/p/w500${movie.poster_path}`;
                        return (
                            <div key={index}>
                                <div className='moviesSearch-movie' onClick={() => onSelectMovieHandler(movie)}>
                                    <img src={movieImageUrl} className='moviesSearch-img' />
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
        <MovieModel
            show={isToggle}
            closed={closeHandler}
            backgroundImage={movieDetails.backdrop_path || movieDetails.poster_path}
        >
            <MoviesDetails movie={movieDetails} />
        </MovieModel>
    </div>
  ) : (
    <div className='noResults'>
        <div className='noResults-box'>
            <p className='noResults-text'>{`Your search for ${debouncedSearchTerm} did not have any matches.`}</p>
            <p className='noResults-subText'>Suggestions:</p>
            <ul className='noResults-list'>
                <li className='noResults-list-item'>Try different keywords</li>
                <li className='noResults-list-item'>Looking for a movie or TV show?</li>
                <li className='noResults-list-item'>Try using a movie, TV show title, an actor or director</li>
                <li className='noResults-list-item'>Try a genre, like comedy, romance, sports, or drama</li>
            </ul>
        </div>
    </div>
  )
}

export default Search