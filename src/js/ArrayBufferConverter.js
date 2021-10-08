export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer16BitView = new Int16Array(buffer);
  }

  toString() {
    let str = '';
    for (let index = 0; index < this.buffer16BitView.length; index += 1) {
      str += String.fromCharCode(this.buffer16BitView[index]);
    }
    return str;
  }
}
