window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() {
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );
	


}
