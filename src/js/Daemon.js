import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(name) {
    super(name, 'Daemon');
    this._attack = 100;
    this.defence = 40;
  }
}
