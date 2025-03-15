window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();

	const hourTime = hour > 12 ? hour - 12 : hour;
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	
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
