import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  /* eslint-disable */load() {
    return read()
      .then((data) => json(data))
      .catch(() => {
        throw new Error('Ошибка');
    });
  }
}
