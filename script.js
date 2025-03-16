window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );

	if (hour > 12) {
      hour = hour - 12;
    }   
    if (hour < 10 ) {
      hour = "0" + hour;
    }   
    if(hour==0){ 
      hour=12;
    }
	
	document.querySelector("#date").innerHTML = (
		[
			date.getDate(),
      ++date.getMonth(), 
			date.getFullYear()
		]
			.map(format)
			.join('/')
	);
	
	const week = [
		"Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
	];
	
	document.querySelector("#day").innerHTML = week[ date.getDay() ];

}
