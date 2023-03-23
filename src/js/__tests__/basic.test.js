import GameSavingLoader from '../app';

test('loads game saving data', async () => {
  const loader = new GameSavingLoader();
  const saving = await loader.load();
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  expect(JSON.stringify(saving)).toEqual(result);
});
