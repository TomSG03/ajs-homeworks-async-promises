import Character from '../Character';
import Daemon from '../Daemon';

test('Created Character class', () => {
  expect(new Character('Bower', 'Bowerman')).toEqual({
    name: 'Bower',
    type: 'Bowerman',
    health: 100,
    level: 1,
  });
});

test('Created Character class', () => {
  expect(() => new Character('B', 'Bowerman')).toThrowError(new Error('Длина переменной name должна быть в проделах от 2 до 10'));
});

test('Created Character class', () => {
  expect(() => new Character('Bower', 8)).toThrowError(new Error('Тип переменной не строка'));
});

test('Created Character class', () => {
  expect(() => new Character(8, 'Bowerman')).toThrowError(new Error('Тип переменной не строка'));
});

test('check damage', () => {
  const hero = new Daemon('Casper');
  hero.damage(50);
  expect(hero.health).toBe(70);
});

test('check damage < 0', () => {
  const hero = new Daemon('Casper');
  hero.health = -1;
  hero.damage(50);
  expect(hero.health).toBe(-1);
});

test('check levelUp', () => {
  const hero = new Daemon('Casper');
  hero.health = 20;
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Casper',
    type: 'Daemon',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('check levelUp - health = 0', () => {
  const hero = new Daemon('Casper');
  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError(new Error('нельзя повысить левел умершего'));
});
