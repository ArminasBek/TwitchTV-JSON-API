var streams = ["freecodecamp", "storbeck", "ogamingsc2", "comster404"];
var streamVal;
var html;
//Get info from Twitch.tv API
function getInfo(){
	for (var i = 0; i < streams.length; i++) {
		(function(i){
		$.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] +'?callback=?', function(data){
		if(data.status == null){
			streamVal = "Offline";
		} else {
			streamVal = data.status;
		}

		if(data.status == 422) {
			streamVal = "Channel is unavailable";
			data.logo = "https://image.freepik.com/free-icon/question-mark-on-a-circular-black-background_318-41916.png";
		}

		html = '<div class="item"><img src="' + data.logo + '"> ' + streams[i] + ' : ' + streamVal + '</div>'

		$("div#data").append(html);
		console.log(data);
	})//EOF getJSON
	})(i);
	}//EOF for statement
}//EOF getInfo();


getInfo();





