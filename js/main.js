var streams = ["freecodecamp", "storbeck", "ogamingsc2", "comster404"];
var streamVal;
//Get info from Twitch.tv API
for (var i = 0; i < streams.length; i++) {
	$.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] +'?callback=?', function(data){
		//Check if user is online/offline
		if(data.status == null) {
			streamVal = "Offline";
		} else {
			streamVal = data.status;
		}
		//Check if user account available and display output
		if(data.status == 422) {
			streamVal = "Account is closed";
			$("div#data").append(data.message);
			}else {
			$("div#data").append("<div class='item'>" + data.display_name + ": " + " " + streamVal + "</div>")
			console.log(data);
			}
		})
	} //EOF for statement


