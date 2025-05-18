import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    actionMovies: [],
    comedyMovies: [],
    romanceMovies: [],
    horrorMovies: [],
    topRated: [],
    movieDetails: {},
    netflixOriginals: [],
    searchMovies: [],
    Documentary: [],
    Trending: [],
    isFetching: false,
    error: ""
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        actionMovies: (state, action) => {
            state.actionMovies = action.payload.results;
            state.isFetching = false;
        },
        comedyMovies: ( state, action ) => {
            state.comedyMovies = action.payload.results;
            state.isFetching = false;
        },
        romanceMovies: ( state, action ) => {
            state.romanceMovies = action.payload.results;
            state.isFetching = false;
        },
        horrorMovies: ( state, action ) => {
            state.horrorMovies = action.payload.results;
            state.isFetching = false;
        },
        topRated: ( state, action ) => {
            state.topRated = action.payload.results;
            state.isFetching = false;
        },
        netflixOriginals: ( state, action ) => {
            state.netflixOriginals = action.payload.results;
            state.isFetching = false;
        },
        movieDetails: ( state, action ) => {
            state.movieDetails = action.payload.results;
            state.isFetching = false;
        },
        searchMovies: ( state, action ) => {
            state.searchMovies = action.payload.results;
            state.isFetching = false;
        },
        documentary: ( state, action ) => {
            state.Documentary = action.payload.results;
            state.isFetching = false;
        },
        trending: ( state, action ) => {
            state.Trending = action.payload.results;
            state.isFetching = false;
        },
        startFetch: (state) => {
            state.isFetching = true;
        },
        failedFetch: (state, action) => {
            state.isFetching = false;
            state.error = action.payload.msg;
        },
        endFetch: (state) => {
            state.isFetching = false;
            state.error = "";
        },
    } 
});

export const {
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
    failedFetch,
    endFetch,
    trending
} = movieSlice.actions;

export default movieSlice.reducer;