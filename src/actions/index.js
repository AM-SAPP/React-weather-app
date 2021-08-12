const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=fcfb185f3c6f4fb4829143316212707&q=${place}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        dispatch({
            type: "UPDATE_PLACE_DATA",
            payload: data
        })
    });
  };
};

const toogleTheme = ()=>{
    return {
        type: "TOOGLE_THEME"
    }
}

export { updatePlaceData, updatePlace ,toogleTheme};

// {
//     type: "UPDATE_PLACE_DATA",
//     payload: place
// }
