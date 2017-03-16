# GifTastic


HW - GifTastic


Live Link 

https://yenla.github.io/GifTastic/


Summary

• This homework assignment require me to use ajax to pull information from an API URL, I chose the sport category to generate gif images about sport. It was a fun assignment because I got to learn how to pause and un-pause the gif images, which I thought was impossible to do on a web browser. 

Code Explaination

I created a function to declared a variable to pull the API key and use ajax to call for the response. 

For example:

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
	});
