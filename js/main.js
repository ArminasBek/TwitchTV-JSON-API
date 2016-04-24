var streams = ["freecodecamp", "storbeck", "ogamingsc2", "comster404"];
var streamVal;
//Get info from Twitch.tv API
	for (var i = 0; i < streams.length; i++) {
		$.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] +'?callback=?', function(data){
			//Check if user is online/offline or account is closed
			if(data.status == null) {
				streamVal = "Offline";
			} else {
				streamVal = data.status;
			}

			if(data.status == 422) {
				$("div#data").append(data.message);
			}else {
			$("div#data").append("<div class='item'>" + data.display_name + ": " + " " + streamVal + "</div>")
			console.log(data);
			}
		})
	}
















// $(document).ready(function(){
// for (var i=0; i<streams.length; i++) {
// $.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] + '?callback=?', function(data) {
//   	console.log(data);	
//   });

// })


// } //EOF streams
// }); //EOF document ready


