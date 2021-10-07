import Magician from '../Magician';

test('test stoned attack 200', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;
  marlin.distance = 2;
  marlin.attack = 200;

  expect(marlin.attack).toBe(175);
});

test('test stoned attack', () => {
  const marlin = new Magician('Marlin');

  marlin.distance = 2;
  marlin.attack = 100;

  expect(marlin.attack).toBe(90);
});

test('test stoned attack - true\false', () => {
  const marlin = new Magician('Marlin');

  marlin.stoned = true;

  expect(marlin.stoned).toBe(true);
});
