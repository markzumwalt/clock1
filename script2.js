function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	let hour = time.getHours();
   
  if (hour >= 12) {
        if (hour > 12) hour -= 12;
    } else if (hour == 0) {
        hr = 12;   
    }
  
	document.querySelector("#hour")  .innerHTML = format( hour );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );
	document.querySelector("#second").innerHTML = format( date.getSeconds() );

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
