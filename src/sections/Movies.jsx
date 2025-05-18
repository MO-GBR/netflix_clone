import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import * as movieActions from "../Redux/Actions/movieAction";

import Hero from './Hero'
import MoviesRow from '../Components/MoviesRow';

const Movies = ({ selectMovieHandler }) => {
    const {
        actionMovies,
        comedyMovies,
        romanceMovies,
        horrorMovies,
        topRated,
        movieDetails,
        netflixOriginals,
        Documentary,
        Trending
    } = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    const randomMovie = Math.floor(Math.random() * (1000 - 1)) + 1;

    useEffect(() => {
        movieActions.getActionMovies(dispatch);
        movieActions.getComedyMovies(dispatch);
        movieActions.getDocumentaries(dispatch);
        movieActions.getHorrorMovies(dispatch);
        movieActions.getMovieDetails(dispatch, 'tv' || 'movie', randomMovie);
        movieActions.getNetflixOriginals(dispatch);
        movieActions.getRomanceMovies(dispatch);
        movieActions.getTopRated(dispatch);
        movieActions.getTrending(dispatch);
    }, [dispatch]);
    console.log(actionMovies);
  return (
    <div>
      <Hero movie={movieDetails} />
      <MoviesRow
        title="Action Movies"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={actionMovies}
      />
      <MoviesRow
        title="Netflix Original"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={true}
        movies={netflixOriginals}
      />
      <MoviesRow
        title="Comedy Movies"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={comedyMovies}
      />
      <MoviesRow
        title="Trending"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={Trending}
      />
      <MoviesRow
        title="Top Rated"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={topRated}
      />
      <MoviesRow
        title="Romance Movies"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={romanceMovies}
      />
      <MoviesRow
        title="Horror Movies"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={horrorMovies}
      />
      <MoviesRow
        title="Documentaries"
        selectMovieHandler={selectMovieHandler}
        isNetflixMovies={false}
        movies={Documentary}
      />
    </div>
  )
}

export default Movies