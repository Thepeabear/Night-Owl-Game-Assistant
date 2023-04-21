const apiKey1 = "will be used";
const baseURL1 = "will be used";
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
const apiKey2 = "f0aa44ff4b9b8f5166e12cadfd8d1658e871d572";
const baseURL2 = "https://www.giantbomb.com/api/";
const $ = jQuery;

// Function to get game recommendations based on platform and genre
function getRecommendations(platform, genre) {
  // Make the API call
  $.ajax({
    type: "GET",
    url:
      baseURL2 +
      "games/?api_key=" +
      apiKey2 +
      "&format=json&field_list=name,image&filter=platforms:" +
      platform +
      ",genres:" +
      genre +
      "&sort=original_release_date:desc&limit=10",
    dataType: "jsonp",
    crossDomain: true,
    success: function (data) {
      // Get the results array from the API response
      const results = data.results;
      // Clear any existing recommendations from the page
      $("#recommended-games").empty();
      // Iterate through the results and append the game names and images to the recommended-games div
      for (let i = 0; i < results.length; i++) {
        $("#recommended-games").append(
          "<div class='game'><h3>" +
            results[i].name +
            "</h3><img src='" +
            results[i].image.small_url +
            "'></div>"
        );
      }
    },
    error: function (error) {
      console.log("Error: " + error.message);
    },
  });
}

// Call the getRecommendations function when the search button is clicked
$("#searchBtn button").click(function () {
  // Get the selected platform and genre from the dropdown menus
  const platform = $("#filter-select").val();
  const genre = $("#search-form input").val();
  // Call the getRecommendations function with the selected platform and genre
  getRecommendations(platform, genre);
});
