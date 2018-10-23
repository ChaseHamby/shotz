const writeMovie = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((movie) => {
      domString += `
      <div class="movieClass col-md-6 col-md-offset-3">
      <div class="thumbnail">
          <div class="caption">
              <h6 id="name1">Name : ${movie.Name}</h6>
              <h6 id="genre1">Genre : ${movie.Genre}</h6>
              <h6 id="date1">Date Release : ${movie.Name}</h6>
              <h6 id="description1">Description : ${movie.Description}</h6>
        </div>
        <button class="btn btn-danger" id="morning">Morning</button>
        <button class="btn btn-danger" id="afternoon">Afternoon</button>
        <button class="btn btn-danger" id="evening">Evening</button>
        <button class="btn btn-danger" id="dark">After Dark</button>
        </div>
        <div class="input-group mb-3">
            <input type="text" id="myInput" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
        </div>
  </div>
      `
    })
    $("#movieLine").append(domString);
};


export {writeMovie}