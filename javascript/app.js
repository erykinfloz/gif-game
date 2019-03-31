var topics = ["m4", "m3", "m5", "audi"];


      function displayMovieInfo() {

        var movie = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=m3iiqJv5A8yc5dNnxKQC1T93w1IRhd5x&q=" + movie + "&offset=0&rating=G&lang=en&limit=10";


        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response)


          var movieDiv = $("<div class='movie'>");


          var rating = response.Rated;


          var pOne = $("<p>").text("Rating: " + rating);


          movieDiv.append(pOne);

          var imgURL = response.data[0].images.fixed_height.url;

          var image = $("<img>").attr("src", imgURL);


          movieDiv.append(image);


          $("#movies-view").prepend(movieDiv);
        });

      }


      function renderButtons() {


        $("#buttons-view").empty();


        for (var i = 0; i < topics.length; i++) {


          var a = $("<button>");

          a.addClass("movie-btn");

          a.attr("data-name", topics[i]);

          a.text(topics[i]);

          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".movie-btn", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
//i cant figure out how to get the link to show more than one gif at a time
//i dont understand how to make the gif not play at the beggining and then play again once you click on the image
//i have to make it so the link shows more than one gif
//i have to grab a solid state static image then when you click onclick it plays the image or gif but only on click
