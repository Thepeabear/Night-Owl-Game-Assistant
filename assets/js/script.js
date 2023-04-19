const apiKey = "f0aa44ff4b9b8f5166e12cadfd8d1658e871d572";
const baseURL = "https://www.giantbomb.com/api/";

// Function to get game recommendations based on platform and genre
function getRecommendations(platform, genre) {
  // Make the API call
  $.ajax({
    type: "GET",
    url:
      baseURL +
      "games/?api_key=" +
      apiKey +
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
    error: function (xhr, status, error) {
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
