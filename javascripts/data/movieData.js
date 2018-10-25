import {writeMovie} from "../components/movieComponent.js"

const printMovie = () => {
    return new Promise ((resolve, reject) => {
    $.get('../db/movie.json')
        .done((data2) => {
        resolve (writeMovie(data2.movie));
        })
        .fail((error) => {
        console.error(error);
        reject(error)
        });
    });
};

export {printMovie}
