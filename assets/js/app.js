//life object
var lifeCalculator = {
	femaleLE: 81,
	maleLE: 76,
	lifeTake: 11,

	gender: String,
	age: Number,
	CPD: Number,
	years: Number,
	minutesLost: Number,

	secondsLeft: Number,
	minutesLeft: Number,
	hoursLeft: Number,
	daysLeft: Number,
	monthsLeft: Number,
	yearsLeft: Number,

	calculateLifeTake: function(){
		if(this.gender.toLowerCase() === "male"){
			this.calculateTimeLeft(this.maleLE);
		} else {
			this.calculateTimeLeft(this.femaleLE);		
		}
		return Math.floor(this.yearsLeft);
	},

	calculateTimeLeft: function(lifeExpectency){
		this.minutesLost = Math.round(((this.CPD * this.lifeTake) * 365) * this.years);
		var ageToMinutes = this.age * 12 * 31 * 24 * 60;
		this.minutesLost += ageToMinutes;
		console.log("age in minutes: " +ageToMinutes);
		this.secondsLeft = Math.floor(this.minutesLost * 60 % 60);
		this.minutesLeft = Math.floor(this.minutesLost % 60);
		this.hoursLeft = Math.floor(this.minutesLost / 60 % 24);
		this.daysLeft = Math.floor(this.minutesLost / 60 / 24 % 31);
		this.monthsLeft = Math.floor(this.minutesLost / 60 / 24 / 31 % 12);
		this.yearsLeft = Math.floor(lifeExpectency - (this.minutesLost / 60 / 24 / 31 / 12));
	},

	countDown : function(){
		
	}
}

$("#calc").click(function(){
	lifeCalculator.gender = $("input[name='gender']:checked").val();
	lifeCalculator.age = Number($("#age").val());
	lifeCalculator.CPD = Number($("#amount").val());
	lifeCalculator.years = Number($("#years").val());
	var results = lifeCalculator.calculateLifeTake();
	$("table").show();
	countDown();
});

function countDown(){
	var now = new Date();
	var eventDate = new Date(Number(now.getFullYear() + lifeCalculator.yearsLeft), 
		lifeCalculator.monthsLeft, lifeCalculator.daysLeft, lifeCalculator.minutesLeft, lifeCalculator.secondsLeft);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	remTime = eventTime - currentTime;

	var sec = Math.floor(remTime / 1000);
	var min = Math.floor(sec / 60);
	var hour = Math.floor(min / 60);
	var day = Math.floor(hour / 24);
	var month = Math.floor(day / 31);
	var year = Math.floor(month / 12);

	sec %= 60;
	min %= 60;
	hour %= 24;
	day %= 31;
	month %= 12;

	console.log(year);
	$("#year").text(year);
	$("#months").text(month);
	$("#days").text(day);
	$("#hours").text(hour);
	$("#minutes").text(min);
	$("#seconds").text(sec);

	setTimeout(countDown, 1000);
}

