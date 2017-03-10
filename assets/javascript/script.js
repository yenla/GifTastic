var topics = ["Surfing", "Skate Boarding", "Snow Boarding", "Skiing"];
  
function displaySport() {
  var sport = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      sport + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){

    console.log(response);
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var sportDiv = $("<div class='sport'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var sportImage = $("<img>");
      sportImage.attr("src", results[i].images.fixed_height.url);

      sportDiv.prepend(p);
      sportDiv.prepend(sportImage);

      $("#sports-div").prepend(sportDiv);
    }

  });
}

function renderButtons() {

  $("#buttons").empty();
  
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("sport");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);

    $("#buttons").append(a);

  }
}

$("#add-sport").on("click", function(event) {
  event.preventDefault();

  var sport = $("#sport-input").val().trim();

  topics.push(sport);

  renderButtons();

});

$(document).on("click", ".sport", displaySport);

renderButtons();
