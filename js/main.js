var streams = ["freecodecamp", "storbeck", "ogamingsc2"];
for (var i=0; i<streams.length; i++) {
$.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] + '?callback=?', function(data) {
	if(data.status == null) {
  	data.status = "offline";
  	}
  	$("div#data").append("<div class='streams'>" + 
  		"<img src='" + 
  		data.logo + 
  		"' alt='Logo image'> " +
  		data.display_name + " " + 
  		data.status + 
  		"</div>");

  console.log(data);
  });
} //EOF streams
