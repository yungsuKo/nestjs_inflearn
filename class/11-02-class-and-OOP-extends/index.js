class Monster {
	power = 10;
	health = 100;

	constructor(aaa, www) {
		this.power = aaa;
		this.health = www;
	}

	attack = () => {
		console.log("공격하자 :" + this.power);
		console.log("체력 :" + this.health);
		this.run();
	};
}

class SkyMonster extends Monster {
	constructor(qqq, www) {
		// 부모 클래스로 값 전달
		super(qqq, www);
	}

	run = () => {
		console.log("날라서 도망가자");
	};
}

class GroundMonster extends Monster {
	constructor(www) {
		super(www);
	}

	run = () => {
		console.log("뛰어서 도망가자");
	};
}

const mymonster1 = new SkyMonster(10);
const mymonster2 = new GroundMonster(30);

mymonster1.attack();
mymonster2.attack();
