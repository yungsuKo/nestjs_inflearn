// 주체가 누구느냐에 따라 상속/전략 패턴이라고 함.
// 클래스를 이미 구성된

const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);

class GroundThing {
    run = () => {
        console.log("도망!!!");
    };
}

class FlyThing {
    run = () => {
        console.log("날아!!!");
    };
}

class Monster {
    constructor(power, thing) {
        this.power = power || 10;
        this.thing = thing || new GroundThing();
    }

    attack = () => {
        console.log("공격!!!");
        console.log("내 공격력은 " + this.power + "입니다.");
    };

    run = () => {
        this.thing.run();
    };
}

const monster1 = new Monster();
monster1.attack();
monster1.run();

const monster2 = new Monster(30, new GroundThing());
console.log("====================================");
monster2.attack();
monster2.run();

const monster3 = new Monster(20, new FlyThing());
console.log("====================================");
monster3.attack();
monster3.run();
