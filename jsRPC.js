class Rochambeauer {
	constructor(name, strategy) {
		this.strategy = strategy;
		this.name = name;
		this.record = 0;
	}

	play() {
		return this.strategy.play();
	}

	setRecord(delta) {
		this.record += delta;
	}

	getName() {
		return this.name;
	}
}


class Strategy {
	constructor(r, p, s) {
		if ((r+p+s) != 30) {
			console.log('invalid strategy');
			return null;
		} else {
			this.r = r;
			this.p = p;
			this.s = s;
		}
	}

	play() {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}
		var newRando = getRandomInt(0, 29);

	}
}


class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}

	play(rounds) {
		var play1;
		var play2;
		for (var i = 0; i < rounds; i++) {
			play1 = this.player1.play();
			play2 = this.player2.play()*(-1);

		}
	}
}




