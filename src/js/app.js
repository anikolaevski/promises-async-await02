/* eslint-disable no-console */
// TODO: write code here
import { GameSavingLoader } from './GameSavingLoader';

GameSavingLoader.load().then((data) => {
  const obj = JSON.parse(data);
  console.log(obj);
});
