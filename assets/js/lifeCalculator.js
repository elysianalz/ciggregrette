var lifeCalculator = {
	femaleLE: 81,
	maleLE: 76,
	lifeTake: 11;

	gender: String,
	age: Number,
	CPD: Number,
	years: Number,

	setGender: function(gender){
		this.gender = gender;
	},

	setAge: function(age){
		this.age = age;
	},

	setCPD: function(cpd){
		this.CPD = cpd;
	},

	setYears: function(years){
		this.years = years;
	}

};

module.exports = lifeCalculator;