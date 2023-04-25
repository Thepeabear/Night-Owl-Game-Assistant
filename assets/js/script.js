const apiKey1 = "will be used";
const baseURL1 = "will be used";
const btnEl = document.querySelector(".btn");
const searchForm = document.getElementById("input-form");
const recommendations = document.getElementById("recommended-games");
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
const searchBar = document.getElementById("search-form");
let searchTerm = "";
searchForm.addEventListener("submit", (event) => {
  console.log("submit");
  event.preventDefault();
  let inputEl = document.getElementById("input");
  console.log(inputEl.value);
  getSearchResults(inputEl);
});
const apiKey2 = "f0aa44ff4b9b8f5166e12cadfd8d1658e871d572";
const baseURL2 = "https://www.giantbomb.com/api/";
const $ = jQuery;

function getSearchResults(genre) {
  // Construct the API URL
  const apiUrl = `${baseURL2}search/?api_key=${apiKey2}&format=json&query="${genre}"&resources=game`;
  // Make the fetch request
  const options = {
    method: "GET",
  };
  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Get the results array from the API response
      const results = data.results;
      // Clear any existing recommendations from the page
      $("#search-results").empty();
      // Create a new container div for the game list
      const resultListEl = $("<div>").addClass("game-list");
      // Create an ordered list for the games
      const olEl = $("<ol>");
      const ol2El = $("<ol>");
      // Iterate through the results and append the game names and images to the ol element
      for (let i = 0; i < 4; i++) {
        const gameEl = $("<li>").addClass("game");
        const nameEl = $("<h2>").text(results[i].name);
        const imgEl = $("<img>").attr("src", results[i].image.small_url);
        gameEl.append(nameEl, imgEl);
        olEl.append(gameEl);
      }
      for (let i = 3; i < 7; i++) {
        const gameEl = $("<li>").addClass("game");
        const nameEl = $("<h2>").text(results[i].name);
        const imgEl = $("<img>").attr("src", results[i].image.small_url);
        console.log(nameEl);
        gameEl.append(nameEl, imgEl);
        ol2El.append(gameEl);
      }
      resultListEl.append(olEl);
      recommendations.append(ol2El);

      // Append the resultListEl to #search-results
      $("#search-results").append(resultListEl);
    })
    .catch((error) => {
      console.log("Error: " + error.message);
    });
}

// Call the getSearchResults function when the search button is clicked
$("#searchBtn button").click(function () {
  // Get the selected platform and genre from the dropdown menus
  const platform = $("#filter-select").val();
  const genre = $("#search-form input").val();
  // Call the getSearchResults function with the selected platform and genre
  getSearchResults(platform, genre);
});
