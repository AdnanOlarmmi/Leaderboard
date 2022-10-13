import apiEndPoint from './config.js';

const recentScoresEl = document.querySelector('.recent-scores__scores');
const renderScores = async () => {
  let markup = '';

  try {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    if (!res.ok) {
      recentScoresEl.innerHTML = 'Server Down';
    }
    data.result.forEach((item) => {
      markup += `  <li><span class="recent-scores__name">${item.user}: </span><span class="recent-scores__score">${item.score}</span> </li>`;
    });
    recentScoresEl.innerHTML = markup;
  } catch (err) {
    recentScoresEl.innerHTML = 'Server Down';
  }
};

export default renderScores;
