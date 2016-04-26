var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "comster404"];
var streamVal;
var html;
var statusClass;
//Get info from Twitch.tv API
function getInfo(){
	for (var i = 0; i < streams.length; i++) {
		(function(i){
		$.getJSON('https://api.twitch.tv/kraken/channels/' + streams[i] +'?callback=?', function(data){
		if(data.status == null){
			streamVal = "Offline";
			statusClass = "offline";
		} else {
			streamVal = data.status;
			statusClass = "online";
		}

		if(data.status == 422) {
			streamVal = "Channel is unavailable";
			statusClass = "offline";
			data.logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Red_x.svg/1024px-Red_x.svg.png";
			
		}

		if(data.logo == null) {
			data.logo = "http://www.icfcd.net/members/no-logo.png";
		}

		html = '<div class="item ' + statusClass + '"><img src="' + data.logo + '"> ' + streams[i] + ' : ' + streamVal + '</div>'

		$("div#data").append(html);
		console.log(data);
	})//EOF getJSON
	})(i);
	}//EOF for statement
}//EOF getInfo();


getInfo();

//Button Listeners
$("button#online").on("click", function(){
	$(".item.offline").hide();
	$(".item.online").show();
});
$("button#offline").on("click", function(){
	$(".item.online").hide();
	$(".item.offline").show();
})
$("button#all").on("click", function(){
	$(".item.online").show();
	$(".item.offline").show()
})

//
