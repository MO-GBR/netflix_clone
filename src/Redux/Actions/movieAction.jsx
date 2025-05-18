import {
    actionMovies,
    comedyMovies,
    romanceMovies,
    horrorMovies,
    topRated,
    movieDetails,
    netflixOriginals,
    searchMovies,
    documentary,
    startFetch,
    trending,
    failedFetch,
    endFetch
} from '../Reducers/movieSlice';

import { allMovies } from "../../Request/moviesDB";

const moviesKey = import.meta.env.VITE_MOVIES_KEY;

const media_type = {
    tv: 'tv',
    movie: 'movie',
};

export const getMovieDetails = async (dispatch, mediaType, mediaId) => {
    try {
        dispatch(startFetch());
        let urlPath;
        (mediaType === media_type.movie) && (urlPath = `/movie/${mediaId}?api_key=${moviesKey}`);
        (mediaType === media_type.tv) && (urlPath = `/tv/${mediaId}?api_key=${moviesKey}`);

        const data = await allMovies(urlPath);

        dispatch(movieDetails({
            results: data
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getSearchMovie = async (dispatch, searchTerm) => {
    try {
        dispatch(startFetch());
        const urlPath = `/search/multi?api_key=${moviesKey}&language=en-US&include_adult=false&query=${searchTerm}`;

        const data = await allMovies(urlPath);

        dispatch(searchMovies({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getNetflixOriginals = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/tv?api_key=${moviesKey}&with_networks=213`;

        const data = await allMovies(urlPath);

        dispatch(netflixOriginals({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getTrending = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/trending/all/week?api_key=${moviesKey}&language=en-US`;

        const data = await allMovies(urlPath);

        dispatch(trending({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getTopRated = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/movie/top_rated?api_key=${moviesKey}&language=en-US`;

        const data = await allMovies(urlPath);

        dispatch(topRated({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getActionMovies = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/movie?api_key=${moviesKey}&with_genres=28`;

        const data = await allMovies(urlPath);

        dispatch(actionMovies({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getComedyMovies = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/movie?api_key=${moviesKey}&with_genres=35`;

        const data = await allMovies(urlPath);

        dispatch(comedyMovies({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getHorrorMovies = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/movie?api_key=${moviesKey}&with_genres=27`;

        const data = await allMovies(urlPath);

        dispatch(horrorMovies({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getRomanceMovies = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/movie?api_key=${moviesKey}&with_genres=10749`;

        const data = await allMovies(urlPath);

        dispatch(romanceMovies({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};

export const getDocumentaries = async (dispatch) => {
    try {
        dispatch(startFetch());
        const urlPath = `/discover/movie?api_key=${moviesKey}&with_genres=99`;
        
        const data = await allMovies(urlPath);

        dispatch(documentary({
            results: data.results
        }));
    } catch (error) {
        console.log(error);
        dispatch(failedFetch({
            msg: error.message
        }));
    };

    setTimeout(() => {
        dispatch(endFetch());
    }, 5000);
};