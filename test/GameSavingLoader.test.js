import GameSavingLoader from '../src/js/GameSavingLoader';
import json from '../src/js/parser';
import read from '../src/js/reader';

const UniTestData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('Test GameSavingLoader', async () => {
  const expected = JSON.parse(UniTestData);
  const data = await GameSavingLoader.load();
  const result = JSON.parse(data);
  expect(result).toEqual(expected);
});

test('Test read & parse', async () => {
  const expected = UniTestData;
  const dat = await read();
  const result = await json(dat);
  expect(result).toEqual(expected);
});

test('reader result length', async () => {
  const dat = await read();
  expect(dat).toBeDefined();
});
