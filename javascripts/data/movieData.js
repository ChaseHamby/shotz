import {writeMovie} from "../components/movieComponent.js"

const printMovie = () => {
    return new Promise ((resolve, reject) => {
    $.get('../db/movie.json')
        .done((data) => {
            resolve (writeMovie(data.movie));
        })
        .fail((error) => {
            reject(error)
        });
    });
};


// const loadMoviesWithLocations = (locationId) => {
//     return new Promise((resolve, reject) => {
//       $.get('../db/movie.json')
//         .done((data) => {
//           const moviesForPage = data.movies.filter(movie => movie.location_id == locationId)
//           resolve(moviesForPage);
//         })
//         .fail((error) => {
//           reject(error);
//         })
//     })
//   }

// const loadMoviesOnLocations = (locations) => {
//     return new Promise((resolve, reject) => {
//         $.get('../db/movie.json')
//         .done((data) => {
//             const locationsWithMovies = .locations.map(location => {
//             const matchingMovies = data.movies.filter(movie => movie.location_id === locationId);
//             location.movies = matchingMovies;
//             return location;
//         })
//             resolve(locationsWithMovies);
//         })
//         .fail((error) => {
//             reject('error loadMoviesOnLocations', error);
//         })
//     })
// }

export {printMovie}
