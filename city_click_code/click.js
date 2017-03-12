//variable for city
//var city = "Orlando";

	//function displayTrendInfo() {
		
	var settings = {
  "async": true,
  "crossDomain": true,
  "dataType": 'jsonp',
  "url": "https://shrouded-ravine-11424.herokuapp.com/1.1/trends/place.json?id=2466256",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "0daac021-8084-9b44-33e4-129b7c0171d7"
  }
}

//ajax call for settings variable data 
$.ajax(settings).done(function (response) {
  console.log(response);
  		for (var i = 0; i < 50; i++) {
  			//storing results from API response in a variable
      	  var results = response[0].trends[i].name;
      	  console.log(results);

        //generate a button for each trend name
        var newButton = $("<button>");
        //add a class
        newButton.addClass("trend-name");
        //add each trend name as text inside the button
        newButton.text(results);
        //append each button to the page
        $("#trends").append(newButton);
  		}//response function end
 		

      	  // for(results) {
      	  // 	var cityButton = $("<button>");
      	  // 	cityButton.append(results)
      	  // }

      	  // //empty #trends div before loop to clear previous trends
      	  // $("#trends").empty();

      	  // //looping through each result item
      	  // for (i = 0; i < results.length; i++) {
      	  // 	console.log(results[i]);

      	  // 	//creating a div for each item
      	  // 	var trendDiv = $("<div>");

      	  // } //results loop end

}); //ajax end

         




		// var queryURL = "https://shrouded-ravine-11424.herokuapp.com/1.1/trends/place.json?id=2466256";
	
		// //performing Ajax GET request and run function for response after GET is done
  //     	$.ajax({
  //     	  url: queryURL,
  //     	  method: "GET"
  //     	}).done(function(response) {
  //     	  console.log(queryURL);
  //     	});
	//} //displayTrendInfo function end	

   