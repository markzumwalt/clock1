window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
	let date = new Date();
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );
	


}
