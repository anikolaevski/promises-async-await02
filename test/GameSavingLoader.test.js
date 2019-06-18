import { GameSavingLoader } from '../src/js/GameSavingLoader';
import { GameSavingData } from '../src/js/GameSavingData';
import { readGameSaving } from '../src/js/readGameSaving';

test('Test GameSavingLoader', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');

  GameSavingLoader.load().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});

test('Test GameSavingData', () => {
  const expected = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const sourceData = new GameSavingData(expected);

  sourceData.json().then((data) => {
    const result = JSON.parse(data);
    expect(result).toEqual(expected);
  });
});

test('Test readGameSaving', () => {
  const testdata = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const expected = JSON.parse(testdata);

  readGameSaving(testdata).then((data) => {
    const result = new GameSavingData(data).json();
    expect(result).toEqual(expected);
  });
});
