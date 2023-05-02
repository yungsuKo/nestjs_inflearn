const a = new Date();
console.log(a.getFullYear());
console.log(a.getMonth() + 1);

class Monster {
	power = 10;

	constructor(aaa) {
		this.power = aaa;
	}

	attack = () => {
		console.log("공격력은" + this.power + "야");
		this.run();
	};

	run = () => {
		console.log("도망가자");
	};
}

const mymonster1 = new Monster(10);
console.log(mymonster1.power);
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(50);
console.log(mymonster2.power);
mymonster2.attack();
mymonster2.run();
