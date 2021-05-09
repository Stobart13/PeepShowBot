require('dotenv').config()
const Twit = require('twit');
var fs = require('fs');

var T = new Twit({
	consumer_key: process.env.TWIT_CONSUMER_KEY,
	consumer_secret: process.env.TWIT_CONSUMER_SECRET,
	access_token: process.env.TWIT_ACCESS_TOKEN,
	access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var stream = T.stream('statuses/filter', { track: '@bot_peep' });

stream.on('tweet', tweetEvent);

function tweetEvent(tweet){
	var reply_to = tweet.in_reply_to_screen_name;
	var name = tweet.user.screen_name;
	var txt = tweet.text;
	var id = tweet.id_str;

	if(reply_to == "bot_peep"){
		txt = txt.replace(/@bot_peep/g, '');

		var replyText = '@'+name+' Chance would be a fine thing!';
	}

	T.post('statuses/update', {status: replyText, in_reply_to_status_id: id, tweeted});

function tweeted(err,data,response){
	if(err){
		throw err
	}
	else{
		console.log(data);
	}
}
}