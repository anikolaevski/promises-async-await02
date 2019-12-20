import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const data = await json(buffer);
      return data;
    } catch (e) {
      return e;
    }
  }
}
