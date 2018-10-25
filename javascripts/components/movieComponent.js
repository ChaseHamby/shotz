
const writeMovie = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((movie) => {
      domString += `
      <div class="movieClass col-md-6 col-md-offset-3 p-2" id="location-card">
      <div class="thumbnail">
          <div class="caption">
          <div class="${movie.id} delete mb-5 mt-5"
              <h6 id="name1">Name : ${movie.Name}</h6>
              <h6 id="genre1">Genre : ${movie.Genre}</h6>
              <h6 id="date1">Date Release : ${movie.Name}</h6>
              <h6 id="description1">Description : ${movie.Description}</h6>
            </div>
            </div>
       </div>
      </div>
      `
    })
    $("#movie").append(domString);
};

// const bindEvents = () => {
//     $('#toBoardsBtn').click(() => {
//       $('#available').hide();
//       $('#movie').show();
//     })
//   }

//   const initialMovieView = (movieId) => {
//     loadLocationsOnMovies(movieId)
//       .then(data => {
//         writeMovie(data);
//         bindEvents();
//       })
//       .catch(error => {
//         console.error('things messed up in pins', error);
//       });
//   }

export {writeMovie}