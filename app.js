require('dotenv').config()
const Twit = require('twit');

var T = new Twit({
	consumer_key: process.env.TWIT_CONSUMER_KEY,
	consumer_secret: process.env.TWIT_CONSUMER_SECRET,
	access_token: process.env.TWIT_ACCESS_TOKEN,
	access_token_secret: process.env.TWIT_ACCESS_TOKEN_SECRET
});

var postQuote= () =>{T.post('statuses/update', {status: "A fine thing indeed!"}, function(err, data, response){
	console.log(data)
});
};

postQuote();