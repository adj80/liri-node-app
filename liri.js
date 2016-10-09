var keys = require ('./keys.js');

var Twitter = require('twitter');

var params={screen_name:'  '};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if(!error) {
		console.log(tweets);
	}
});


var spotify = require('spotify');

spotify.search({ type: 'track', query: 'song'}, function(err, data) {
		console.log(data.tracks.items[0].album.name);
		console.log(data.tracks.items[0].artists[0].name);

		if ( err ) {
			console.log('Error occurred: ' + err);
			return;
		}
		
});


var request = require('request');
var movieName = process.argv[2];
var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';
console.log(queryUrl);
request(queryUrl, function (error, response, body) {
	if (!error && response.statusCode == 200) {
    console.log(data)  
  }

});

var fs = require('fs');
fs.read file("random.txt", "utf8", function(error, data){
	console.log(data);
	var dataArr = data.split(',');
	console.log(dataArr);
});  