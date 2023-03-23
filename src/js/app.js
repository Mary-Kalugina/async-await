import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  /* eslint-disable */async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const parsedData = JSON.parse(jsonData);
      const gameSaving = new GameSaving(parsedData.id, parsedData.created, parsedData.userInfo);
      return gameSaving;
    } catch(error) {
        throw new Error('Ошибка');
    }
  }
}

class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
}