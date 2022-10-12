import scoresArr from './scores.js';
import renderScores from './renderScores.js';

const nameEl = document.querySelector('.leaderboard__name');
const scoreEl = document.querySelector('.leaderboard__score');
const formEl = document.querySelector('form');

const addScore = () => {
  const name = nameEl.value;
  const score = scoreEl.value;
  const scoreOBJ = { name, score };
  scoresArr.push(scoreOBJ);
  renderScores();
  formEl.reset();
};

export default addScore;