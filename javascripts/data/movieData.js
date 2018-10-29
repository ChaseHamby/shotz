import {writeMovie, writeMovieDos} from "../components/movieComponent.js"

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

const printMovie2 = () => {
    return new Promise ((resolve, reject) => {
    $.get('../db/movie.json')
        .done((data) => {
            resolve (writeMovieDos(data.movie));
        })
        .fail((error) => {
            reject(error)
        });
    });
};

const moviesWithLocations = (movie) => {
    return new Promise((resolve, reject)=> {
        $.get('../db/locations.json')
            .done((data) => {
                const moviePins = movie.map(moviex => {
                    const matchingLocations = data.locations.filter(location =>location.Movie == moviex.Name);
                    moviex.locations = matchingLocations;
                    return moviex
                })
                resolve(moviePins);
      })
      .fail((error) => {
        console.error(error);
        reject(error)
      }); 
      })
};

const moviePromise = () => {
    printMovie().then((data) => {
        return moviesWithLocations(data.movie)
    })
    .then((moviePins) => {
        writeMovie(moviePins)
    })
    .catch((error) => {
        console.error(error)
    })
};

export {printMovie, printMovie2, moviesWithLocations, moviePromise}
