$(document).ready(function() {
	$("#submit").click(function() {

		var startDate = $("#startDate").data("datetimepicker").getDate(),
        startformatted = startDate.getFullYear()+"-"+("0" + (startDate.getMonth()+1)).slice(-2)+"-"+("0" + startDate.getDate()).slice(-2);

        var endDate = $("#endDate").data("datetimepicker").getDate(),
        endformatted = endDate.getFullYear()+"-"+("0" + (endDate.getMonth()+1)).slice(-2)+"-"+("0" + endDate.getDate()).slice(-2);

        var artist = $("#artistEvent").val();

        callSongkickEvents(startformatted,endformatted,artist);
		
	});
});

$(function() {
   $('#startDate').datetimepicker({
      pickTime: false,
      format: 'dd/MM/yyyy',
   });

   $('#endDate').datetimepicker({
      pickTime: false,
      format: 'dd/MM/yyyy',
   });
 });

 function intialiseMap(events) {
 	console.log(event);
 }

 function displayEvents(events) {

 	$("#events").empty();

 	for (var i = 0; i < events.length; i++) {
 		$("#events").append("<p class='well'>"+events[i].displayName+"</p>")
 	}

 }

 function callSongkickEvents(startDate, endDate, artistEvent) {

 	queryLocation = ""

 	$.getJSON('http://api.songkick.com/api/3.0/events.json?apikey=f5togyCzKj4DwonW&artist_name='+artistEvent+
 		'&min_date='+startDate+'&max_date='+endDate+queryLocation+'&jsoncallback=?', function(data) {

 			var events = data.resultsPage.results.event;
 			intialiseMap(events);
 			displayEvents(events);
 	});
 }

 function createMarkers(place, image) {
 	
 }

 function assignMarkerImages() {

 }