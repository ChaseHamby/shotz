const writeMovieDos = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((location) => {
        domString += `
        <div id="divWrap" >
        <div class="${location.TimeOfDay} delete mb-5 mt-5"
        <div class="thumbnail">
            <img src="${location.Image}"
                alt="" width="20%">
            <div class="caption mb-5">
                <h4 id="nameId">${location.Name}</h4>
                <h6 class="address"> Address: ${location.Address}</h6>
                <h6 class="time">Time to Shoot: ${location.Time}</h6>
                <h6 class="light">Lighting: ${location.TimeOfDay}</h6>
                <div class="caption card-footer mb-5">
                 </div>
            </div>
      </div>
  </div>
  </div>
      `
    })
    $("#available").append(domString);
};

export{writeMovieDos}
