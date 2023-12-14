class Monster {
  constructor(power) {
    this.power = power || 10;
  }

  attack = () => {
    console.log('공격!!!');
    console.log('내 공격력은 ' + this.power + '입니다.');
  };

  run = () => {
    console.log('도망!!!');
  };
}

class FlyMonster extends Monster {
  // 오버라이딩 했다. 라고 함.
  // 기존에 있던 run 메소드를 덮어씀
  constructor(power) {
    super(power);
  }
  run = () => {
    console.log('날아!!!');
  };
}

const monster1 = new Monster();
monster1.attack();
monster1.run();

const monster2 = new Monster(30);
console.log('====================================');
monster2.attack();
monster2.run();

const monster3 = new FlyMonster(30);
console.log('====================================');
monster3.attack();
monster3.run();
