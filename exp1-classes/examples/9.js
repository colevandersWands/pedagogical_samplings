// extends classes can also have constructors that extend parent constructors

class OGaccountClass {
	constructor(money) {
		this.cash = money;
	}
	changeCash(deltaCash) {
		this.cash = this.cash + deltaCash;
	}
	displayCash() {
		console.log('i has this many monies: ' + this.cash);
	}
};

// refer to super's constructor
class newGangserClass extends OGaccountClass {
	constructor(money, feet) {
    	// this is necessary to access values from superclass's constructor
    	super(money);
    	this.feet = feet;
  	}
	hasFeet() {
		console.log(this.feet);
	}
};

// or overwrite super's constructor
class newGangserClassOverwrite extends OGaccountClass {
	constructor(money, feet) {
		// completely ignoring the super's constructor
		this.cash = money;
    	this.feet = feet;
  	}
	hasFeet() {
		console.log(this.feet);
	}
};

var finalG = new newGangserClass(3, 4);
var finalGoverwrite = new newGangserClassOverwrite(7, 8);