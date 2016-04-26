var streams = ["freecodecamp", "storbeck", "ogamingsc2", "comster404"];
var streamVal;
var html;
//Get info from Twitch.tv API
function getInfo(){
	for (var i = 0; i < streams.length; i++) {
		(function(i){
		$.getJSON('https://api.twitch.tv/kraken/streams/' + streams[i] +'?callback=?', function(data){
		if(data.stream == null){
			streamVal = "Offline";
		} else {
			streamVal = data.stream.channel.status;
		}

		if(data.status == 422) {
			streamVal = "Channel is unavailable";
		}

		html = '<div class="item">' + streams[i] + ' : ' + streamVal + '</div>'

		$("div#data").append(html);
		console.log(data);
	})//EOF getJSON
	})(i);
	}//EOF for statement
}//EOF getInfo();


getInfo();





