var streams = ["freecodecamp", "storbeck", "ogamingsc2", "comster404"];
var streamVal;
//Get info from Twitch.tv API
for (var i = 0; i < streams.length; i++) {
	$.getJSON('https://api.twitch.tv/kraken/streams/' + streams[i] +'?callback=?', function(data){
		console.log(data);
	} //EOF for statement


