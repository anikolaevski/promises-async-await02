/* eslint-disable no-console */
// TODO: write code here
import GameSavingLoader from './GameSavingLoader';

const main = async () => {
  try {
    const data = await GameSavingLoader.load();
    const obj = JSON.parse(data);
    console.log(1, data);
    console.log(2, obj);
  } catch (err) {
    console.log(err);
  }
};

main();
