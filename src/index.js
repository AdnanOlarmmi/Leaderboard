import './styles.css';
import addScore from './modules/addScore.js';
import renderScores from './modules/renderScores.js';

const submitBtnEl = document.querySelector('.leaderboard__submit-score');
const refreshBtnEl = document.querySelector('.recent-scores__refresh');

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

refreshBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  renderScores();
});

renderScores();