var topics = ["Surfing", "Skate Boarding", "Wakeboarding", "Snow Boarding", "Skiing", 
"Soccer", "Football", "BMX", "Basketball", "Kayak", "Gymnastics", "Swimming", "Fencing", "Judo", "Diving"];
  
function displaySport() {

    var sport = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      sport + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {

    console.log(response);
    var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var sportDiv = $("<div class='sport-class' title='Click on gif to start/stop animation'>");

        var img = $("<img>").on("click", function() {
          var state = $(this).attr("data-state");

          if (state === "still") {
            var changeState = $(this).attr("data-animate");
            $(this).attr("src", changeState);
            $(this).attr("data-state", "animate");
          }

         else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }

        });

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var still = results[i].images.fixed_height_still.url;
        var animate = results[i].images.fixed_height.url;
        img.attr("src", still);
        img.attr("data-still", still);
        img.attr("data-animate", animate);
        img.attr("data-state", "still");
        sportDiv.append(img);

        sportDiv.prepend(p);

        $("#sports-div").prepend(sportDiv);
      }

    });
}
    
function renderButtons() {

  $("#buttons").empty();
  
  for (var i = 0; i < topics.length; i++) {
    var s = $("<button>");
    s.addClass("sport");
    s.attr("data-name", topics[i]);
    s.text(topics[i]);

    $("#buttons").append(s);

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
