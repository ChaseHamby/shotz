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

const moviesWithLocations = (movie) => {
    return new Promise((resolve, reject)=> {
        $.get('../db/locations.json')
            .done((data) => {
                const moviePins = movie.map(movie1 => {
                    const matchingLocations = data.locations.filter(location =>location.Movie == movie1.Name);
                    movie1.locations = matchingLocations;
                    return movie1
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

export {printMovie, moviesWithLocations, moviePromise}
