require('dotenv').config()
const Twit = require('twit');
var fs = require('fs');

var T = new Twit({
	consumer_key: process.env.TWIT_CONSUMER_KEY,
	consumer_secret: process.env.TWIT_CONSUMER_SECRET,
	access_token: process.env.TWIT_ACCESS_TOKEN,
	access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});



tweetFromFile('quotes.txt');

function tweetFromFile(filename){
	fs.readFile(filename, function(err, data){
		if(err){
			throw err;
		}
		else{
			data+=''
			var lines = data.split(':');
			var line = lines[Math.floor(Math.random()*lines.length)]

			var tweet = { status: line}

			console.log(line);

			T.post('statuses/update', tweet, tweeted)

				function tweeted(err,data,response){
	if(err){
		throw err
	}
	else{
		console.log(data);
	}
}	

		}
	})
}

