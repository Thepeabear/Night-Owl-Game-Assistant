var APIKey = "f0aa44ff4b9b8f5166e12cadfd8d1658e871d572";
var getReviews = function (reviews) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f48dd780damshf6554dc854efa2fp1b25dfjsn85a9e44222d9",
      "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
    },
  };

  fetch(
    "https://opencritic-api.p.rapidapi.com/reviews/game/463?skip=20",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
