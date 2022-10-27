import apiEndPoint from './config.js';

const recentScoresEl = document.querySelector('.recent-scores__scores');
const addMsgEl = document.querySelector('.leaderboard__add-msg');
const renderScores = async () => {
  let markup = '';

  try {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    if (!res.ok) {
      recentScoresEl.innerHTML = 'Server Down';
    }
    data.result.sort((a, b) => b.score - a.score).forEach((item, index) => {
      markup += `<li class="leaderboard__player-scores flex-row"><span class="leaderboard__player-index flex-row">${index + 1}</span><span class="recent-scores__name">${item.user.toLowerCase()} </span><span class="recent-scores__score">${item.score}</span></li>`;
    });
    recentScoresEl.innerHTML = markup;
    addMsgEl.innerHTML = 'Scores Updated Successfully';
    setTimeout(() => {
      addMsgEl.innerHTML = '';
    }, 2000);
  } catch (err) {
    recentScoresEl.innerHTML = 'Server Down';
  }
};

export default renderScores;
