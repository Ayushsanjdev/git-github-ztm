function currentTime() {
	var currentDate = new Date();
	document.getElementById("container").innerHTML = 
	currentDate.getHours() + "h" + ":" + currentDate.getMinutes() + "m" + 
	":" +currentDate.getSeconds() + "s";
}
setInterval(currentTime, 1000);
