const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
import teams from './checkbox.js';

let score = 0;
function calculateScore(event, target) {
  event.preventDefault();
  const current = event.target;
  // if (teams.length) {
  //   console.log(teams.length);
  //   const activeTeamId = parseInt(document.querySelectorAll('#active-team')[0].value);
  //   const activeTeam = teams.filter(team => team.id === activeTeamId)[0];

  //   activeTeam.score += parseInt(e.target.dataset.scoreMod);
  //   updateTeamData();
  // }
}

dots.forEach(dot => dot.addEventListener('click', calculateScore));


// const updateTeamData = () => {
//   document.querySelectorAll('#team-data')[0].innerHTML = JSON.stringify(teams);
// };
