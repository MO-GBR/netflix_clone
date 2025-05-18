export const allMovies = async (root) => {
    let data = await fetch(`https://api.themoviedb.org/3${root}`);

    data = await data.json();

    return data
};