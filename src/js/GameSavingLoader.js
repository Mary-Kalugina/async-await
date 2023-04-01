import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  async load() {
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
