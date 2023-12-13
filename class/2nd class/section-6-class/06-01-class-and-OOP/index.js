const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);

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

const monster1 = new Monster();
monster1.attack();
monster1.run();

const monster2 = new Monster(30);
console.log('====================================');
monster2.attack();
monster2.run();
