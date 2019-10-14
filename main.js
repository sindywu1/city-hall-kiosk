var navItemOrder = ["Tell us how our service was today!", "Calendar", "Map of City Facilities", "Share your thoughts with us!", "Legislative Topic Materials", "statGNV", "Public Records Requests", "myGNV Resource Finder", "Pop Up Learning Lab"];
var urlSourcesOrder = ["https://cityofgainesville.iad1.qualtrics.com/jfe/form/SV_9HU92QJRx9RawE5", "https://gainesville.legistar.com/Calendar.aspx", "http://gainesvillefl.maps.arcgis.com/apps/Shortlist/index.html?appid=86cc9453c2394853aaa78d3486294991", "https://www.jotform.com/form/92516048557160", "https://gainesville.legistar.com/Legislation.aspx", "https://stat.cityofgainesville.org/","N/a", "N/a", "N/a"];
var calendarSources = ["https://gainesville.legistar.com/Calendar.aspx", "https://www.cityofgainesville.org/Calendar"];
var icons = ["true", "fal fa-calendar-alt", "fal fa-map-marked-alt", "fal fa-comments", "fal fa-file-alt", "fal fa-chart-line", "fal fa-folder-open", "N/a", "N/a"];

var iterator = 0;

var next = document.getElementById("next");
var prev = document.getElementById("prev");

var tile1 = document.getElementById("button1");
var tile2 = document.getElementById("button2");
var tile3 = document.getElementById("button3");
var tile4 = document.getElementById("button4");

var iframe = document.getElementById("iframe");

var homepage = document.getElementById("homepage");
var screensaver = document.getElementById("screensaver");
var current;

$(function() {
	var currentTime = setInterval(getTime, 1000);
})


function checkIfNaIcon(index, iconNum) {
	if(document.getElementById("icon" + iconNum) != null)
		document.getElementById("icon" + iconNum).remove();
	if(icons[index] == "N/a"){
		document.getElementById("p" + iconNum).style.display = "";
	}
	else if(icons[index] == "true"){
		document.getElementById("p" + iconNum).style.display = "none";
		var icon = document.createElement('img');
		icon.className = "survey";
		icon.id = "icon" + iconNum;
		icon.src = "img/hand-holding-user-light.svg";
		//icon.style = "display: block; font-size: 4em; margin: 10px;";
		document.getElementById("text" + iconNum).parentNode.insertBefore(icon, document.getElementById("text" + iconNum));
	}
	else{
		document.getElementById("p" + iconNum).style.display = "none";
		var icon = document.createElement('i');
		icon.className = icons[index];
		icon.id = "icon" + iconNum;
		icon.style = "display: block; font-size: 4em; margin: 10px;";
		document.getElementById("text" + iconNum).parentNode.insertBefore(icon, document.getElementById("text" + iconNum));
	}

}

function checkIfNa(index) {
	if(urlSourcesOrder[index] != "N/a"){
		iframe.src = urlSourcesOrder[index];
		showSpinnerWhileIFrameLoads();
		document.getElementById("not-available").style.display='none';
	}
	else {
		document.getElementById("not-available").style.display='';
		iframe.style["display"] = "none";
	}
}

function showSpinnerWhileIFrameLoads() {
    var iframe = $('iframe');
    if (iframe.length) {
    	this.iframe.style["display"] = "none";
    	document.getElementById('spinner').style.display='';
        //$(iframe).before('<div id=\'spinner\'><i class=\'fa fa-spinner fa-spin fa-3x fa-fw\'></i></div>');
        $(iframe).on('load', function() {
            document.getElementById('spinner').style.display='none';
            document.getElementById('iframe').style["display"] = "";
        });
    }
}

function showSpinnerWhileIFrame2Loads() {
    var iframe = $('iframe');
    if (iframe.length) {
    	document.getElementById("iframe-scorecard").style["display"] = "none";
    	document.getElementById('spinner2').style.display='';
        //$(iframe).before('<div id=\'spinner\'><i class=\'fa fa-spinner fa-spin fa-3x fa-fw\'></i></div>');
        $(iframe).on('load', function() {
            document.getElementById('spinner2').style.display='none';
            document.getElementById("iframe-scorecard").style["display"] = "";
        });
    }
}

function getTime() {
	var date = new Date();
	var AMPM;
	var hour;
	var minutes;
	if(date.getHours() < 12)
		AMPM = "AM";
	else 
		AMPM = "PM";

	if(date.getHours() == 0)
		hour = 12;
	else if (date.getHours() > 12)
		hour = date.getHours() - 12;
	else
		hour = date.getHours();

	if(date.getMinutes() < 10)
		minutes = "0" + date.getMinutes();
	else
		minutes = date.getMinutes();
	document.getElementById("time").innerHTML = hour + ":" + minutes + " " + AMPM;
	document.getElementById("time-home").innerHTML = hour + ":" + minutes + " " + AMPM;
	if(date.getHours() == 0)
		getDate();
}

function getDate() {
	var date = new Date();
	var day;
	var month;
	switch(date.getDay()) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5: 
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
	}
	switch(date.getMonth()){
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5: 
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	document.getElementById("date").innerHTML = day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
	document.getElementById("date-home").innerHTML = day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();
}

window.onload = function() {
	getTime();
	getDate();
	var navItem;
	var caret;
	var nav = document.getElementById("navigation");
	for(var i = 1; i < navItemOrder.length; i++){
		navItem = document.createElement('div');
		//navItem.id = i;
		navItem.className = "nav-item";
		navItem.style["height"] = "calc(100%/" + (navItemOrder.length-1) + ")";
		var link = document.createElement('button');
		link.innerHTML = navItemOrder[i];
		link.className = "link";
		link.style["padding"] = "calc(100%/" + (10*(navItemOrder.length-1)/7) + ")";
		link.id = i;
		navItem.appendChild(link);
		nav.appendChild(navItem);
	}
	navItem = document.getElementsByClassName("link");
	for(var i = 0; i < navItem.length; i++){
		var item = navItem[i];
		item.onclick = function() {
			if(current.id == "1"){
				document.getElementById("calendar").style.display = "none";
				document.getElementById("iframe-div").style["height"] = "99%";
			}
			if(this.id == "1"){
				document.getElementById("calendar").style.display = "";
				document.getElementById("iframe-div").style["height"] = "93%";
			}
			if(current != null) {
				document.getElementById(current.id).style["z-index"] = "";
				document.getElementById(current.id).style["width"] = "";
				current.style["color"] = "";	
				current.style["font-weight"] = "";
			}
			checkIfNa(this.id);
			document.getElementById(this.id).style["z-index"] = "0";
			
			current = this;
			current.style["color"] = "#074b68";	
			current.style["font-weight"] = "500";
			console.log(100 * (1-((document.getElementById(current.id).offsetHeight / 2)/document.getElementById(current.id).offsetWidth)));
			document.getElementById(current.id).style["width"] = "calc(" + (1-((document.getElementById(current.id).offsetHeight / 2)/document.getElementById(current.id).offsetWidth)) * 100 + "%)";
		}
	}
	
}

next.onclick = function(){
	if(iterator + 1 == navItemOrder.length)
		iterator = 0;
	else
		iterator = iterator + 1;
	var tiles = document.getElementsByClassName("tile");
	for(var i = 0; i < 4; i++){
		if(iterator+i >= navItemOrder.length){
			document.getElementById("text" + (i + 1)).innerHTML = navItemOrder[iterator - navItemOrder.length +i];
			checkIfNaIcon(iterator - navItemOrder.length +i, i+1);
			if(navItemOrder[iterator - navItemOrder.length +i] == "Pop Up Learning Lab")
				document.getElementById("text" + (i + 1)).innerHTML = "Pop Up <br> Learning Lab";
		}
		else{
			document.getElementById("text" + (i + 1)).innerHTML = navItemOrder[iterator+i];
			checkIfNaIcon(iterator+i, i+1);
			if(navItemOrder[iterator +i] == "Pop Up Learning Lab")
				document.getElementById("text" + (i + 1)).innerHTML = "Pop Up <br> Learning Lab";
		}
	}
}

prev.onclick = function(){
	if(iterator - 1 < 0)
		iterator = navItemOrder.length - 1;
	else
		iterator = iterator - 1;
	var tiles = document.getElementsByClassName("tile");
	for(var i = 0; i < 4; i++){
		if(iterator+i >= navItemOrder.length){
			document.getElementById("text" + (i + 1)).innerHTML = navItemOrder[iterator - navItemOrder.length +i];
			checkIfNaIcon(iterator - navItemOrder.length +i, i+1);
			if(navItemOrder[iterator - navItemOrder.length +i] == "Pop Up Learning Lab")
				document.getElementById("text" + (i + 1)).innerHTML = "Pop Up <br> Learning Lab";
		}
		else{
			document.getElementById("text" + (i + 1)).innerHTML = navItemOrder[iterator+i];
			checkIfNaIcon(iterator+i, i+1);
			if(navItemOrder[iterator +i] == "Pop Up Learning Lab")
				document.getElementById("text" + (i + 1)).innerHTML = "Pop Up <br> Learning Lab";
		}
	}
}

function home() {
	document.body.style["background-image"] = "none";
	document.getElementsByClassName("outer-container")[1].style["background-color"] = "#DCDEE0";
	document.body.style["background-color"] = "white";
	document.body.style["color"] = "black !important";
}

tile1.onclick = function(){
	iframe.src = urlSourcesOrder[iterator];
	
	homepage.style.display = "block";
	screensaver.style.display = "none";
	home();
	if(iterator == 0){

	}
	else{
		document.getElementById(iterator).style["z-index"] = "0";
		//console.log((1-((document.getElementById(iterator).offsetHeight / 2)/document.getElementById(iterator).offsetWidth)) * 100);
		document.getElementById(iterator).style["width"] = "calc(" + (1-((document.getElementById(iterator).offsetHeight / 2)/document.getElementById(iterator).offsetWidth)) * 100 + "%)";
	}
	current = document.getElementById(iterator);
	if(current!= null) {
		current.style["color"] = "#074b68";	
		current.style["font-weight"] = "500";
		current.style
	}
	if(iterator == 0) {
		document.getElementById("service-survey-button").click();
	}
	else if(iterator == "1"){
		document.getElementById("calendar").style.display = "";
		document.getElementById("iframe-div").style["height"] = "93%";
		document.getElementById("meetings").click();
	}
	else{
		document.getElementById("iframe-div").style["height"] = "99%";
		checkIfNa(iterator);
	}
}

tile2.onclick = function(){
	var trueIterator;
	if(iterator+1 > 8){
		trueIterator = iterator - navItemOrder.length + 1;
	}
	else
		trueIterator = iterator+1;
	
	iframe.src = urlSourcesOrder[trueIterator];
	homepage.style.display = "block";
	screensaver.style.display = "none";
	home();
	if(trueIterator == 0){

	}
	else{
		document.getElementById(trueIterator).style["z-index"] = "0";
		console.log((1-((document.getElementById(trueIterator).offsetHeight / 2)/document.getElementById(trueIterator).offsetWidth)) * 100);
		document.getElementById(trueIterator).style["width"] = "calc(" + (1-((document.getElementById(trueIterator).offsetHeight / 2)/document.getElementById(trueIterator).offsetWidth)) * 100 + "%)";
	}
	current = document.getElementById(trueIterator);
	if(current != null){
		current.style["color"] = "#074b68";	
		current.style["font-weight"] = "500";
	}
	
	if(trueIterator == 0) {
		document.getElementById("service-survey-button").click();
	}
	else if(trueIterator == "1"){
		document.getElementById("calendar").style.display = "";
		document.getElementById("iframe-div").style["height"] = "93%";
		document.getElementById("meetings").click();
	}
	else{
		document.getElementById("iframe-div").style["height"] = "99%";
		checkIfNa(trueIterator);
	}
}

tile3.onclick = function(){
	var trueIterator;
	if(iterator+2 > 8){
		trueIterator = iterator - navItemOrder.length + 2;
	}
	else
		trueIterator = iterator+2;
	
	iframe.src = urlSourcesOrder[trueIterator];
	homepage.style.display = "block";
	screensaver.style.display = "none";
	home();
	if(trueIterator == 0){

	}
	else{
		document.getElementById(trueIterator).style["z-index"] = "0";
		document.getElementById(trueIterator).style["width"] = "calc(" + (1-((document.getElementById(trueIterator).offsetHeight / 2)/document.getElementById(trueIterator).offsetWidth)) * 100 + "%)";
	}
	current = document.getElementById(trueIterator);
	if(current != null) {
		current.style["color"] = "#074b68";	
		current.style["font-weight"] = "500";
	}
	
	if(trueIterator == 0) {
		document.getElementById("service-survey-button").click();
	}
	else if(trueIterator == "1"){
		document.getElementById("calendar").style.display = "";
		document.getElementById("iframe-div").style["height"] = "93%";
		document.getElementById("meetings").click();
	}
	else{
		document.getElementById("iframe-div").style["height"] = "99%";
		checkIfNa(trueIterator);
	}
}

tile4.onclick = function(){
	var trueIterator;
	if(iterator+3 > 8){
		trueIterator = iterator - navItemOrder.length + 3;
	}
	else
		trueIterator = iterator+3;
	
	iframe.src = urlSourcesOrder[trueIterator];
	homepage.style.display = "block";
	screensaver.style.display = "none";
	home();
	if(trueIterator == 0){

	}
	else{
		document.getElementById(trueIterator).style["z-index"] = "0";
		document.getElementById(trueIterator).style["width"] = "calc(" + (1-((document.getElementById(trueIterator).offsetHeight / 2)/document.getElementById(trueIterator).offsetWidth)) * 100 + "%)";
	}
	current = document.getElementById(trueIterator);
	if(current != null){
		current.style["color"] = "#074b68";	
		current.style["font-weight"] = "500";
	}
	
	if(trueIterator == 0) {
		document.getElementById("service-survey-button").click();
	}
	else if(trueIterator == "1"){
		document.getElementById("calendar").style.display = "";
		document.getElementById("iframe-div").style["height"] = "93%";
		document.getElementById("meetings").click();
	}
	else{
		document.getElementById("iframe-div").style["height"] = "99%";
		checkIfNa(trueIterator);
	}
}

document.getElementById("service-survey-button").onclick = function() {
	document.getElementById("city-score-card").style["display"]="";
	document.getElementById("iframe-scorecard").src = urlSourcesOrder[0];
	showSpinnerWhileIFrame2Loads();
}

document.getElementById("back").onclick = function() {
	document.getElementById("city-score-card").style.display ="none";
	if(current == null){
		current = document.getElementById("1");
		current.click();
	}
}

document.getElementById("meetings").onclick = function() {
	iframe.src = calendarSources[0];
	document.getElementById("meetings").style["background-color"] = "#3d4551";
	document.getElementById("events").style["background-color"] = "";
	showSpinnerWhileIFrameLoads();
}

document.getElementById("events").onclick = function() {
	iframe.src = calendarSources[1];
	document.getElementById("meetings").style["background-color"] = "";
	document.getElementById("events").style["background-color"] = "#3d4551";
	showSpinnerWhileIFrameLoads();
}
