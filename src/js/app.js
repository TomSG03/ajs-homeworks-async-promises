import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((saving) => {
  console.log(new GameSaving(saving));
});
