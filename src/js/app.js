import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  /* eslint-disable */async load() {
    try {
      const data = await read();
      return await json(data);
    } catch(error) {
      throw new Error('Ошибка');
    }
  }
}
