const createTeam = document.querySelector('.create');
const setTeams = document.querySelector('.set_teams');
const checkboxes = document.querySelectorAll('input');
const teamz = setTeams.querySelectorAll('.teamz');
const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
const teamSelect = document.querySelectorAll('.active_team')

let teams = [];
let score = 0;


const checkboxDOMselect = (checkValue, parentElement) => {
  if (checkValue.checked) {
    const newElem = document.createElement('p');
    //var name = document.createTextNode(`${checkValue.name} has 0 dots.`);
    const name = document.createTextNode(checkValue.name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  } else if (!checkValue.checked) {
    setTeams.childNodes.forEach(team => {
      if (checkValue.name === team.textContent) {
      parentElement.removeChild(team);
    }});
  }
}

const createTeams = (arr, target) => {
  const players = Array.from(document.querySelectorAll('input:checked')).map(input => { return { id: input.id, name: input.name }; });

  if (players.length) {
    teams.push({
      players,
      score: 0,
      id: teams.length
    })
    updateTeamSelect();
  }
  if (!players.length) {
    console.error('PICK A PLAYER');
  }
}


const calculateScore = (event, target) => {
  event.preventDefault();
  const current = event.target;
  if (teams.length) {

    const activeTeamID = teams.filter(team => team.players[0]);

    const activeTeam = activeTeamID.filter(team => team.id === activeTeamID[0].id)[0];

    activeTeam.score += parseInt(current.dataset.dot);
    updateTeamData(activeTeam);
  }
}

const updateTeamSelect = () => {
  const teamSelect = document.querySelectorAll('.active_team')[0];
  teamSelect.innerHTML = '';

  teams.forEach(item => {
    const teamOption = document.createElement('option');
    teamOption.value = item.id;
    teamOption.innerText = `Team ${item.id}`;
    teamSelect.appendChild(teamOption);
  });
}


const updateTeamData = (activeTeam) => {
  activeTeam.players.forEach((player, index) => {
    document.querySelectorAll('.teamz')[index].innerHTML = `${player.name} has ${activeTeam.score} dots.`
  })
};

// EL's
document.addEventListener("click", event => {
  if (!teams.includes(event.target) && event.target.matches("input")) {
    checkboxDOMselect(event.target, setTeams);
  }
  return teams;
});

createTeam.addEventListener("click", (event) => {
  createTeams(checkboxes, event.target.id)
});

dots.forEach(dot => dot.addEventListener('click', calculateScore));


// const teams = [];

// const updateTeamData = () => {
//   document.querySelectorAll('#team-data')[0].innerHTML = JSON.stringify(teams);
// }

// const updateTeamSelect = () => {
//   const teamSelect = document.querySelectorAll('#active-team')[0];
//   teamSelect.innerHTML = '';

//   teams.forEach(item => {
//     const teamOption = document.createElement('option');
//     teamOption.value = item.id;
//     teamOption.innerText = `Team ${item.id}`;
//     teamSelect.appendChild(teamOption);
//   });
// }

// document.querySelectorAll('#create')[0].addEventListener('click', e => {
//   const players = Array.from(document.querySelectorAll('input:checked')).map(input => { return { id: input.dataset.id, name: input.dataset.name }; });

//   if (players.length) teams.push({
//     players,
//     score: 0,
//     id: teams.length,
//   });

//   updateTeamData();
//   updateTeamSelect();
// });

// BUTTONS
// Array.from(document.querySelectorAll('.update-score')).forEach(item => {
//   item.addEventListener('click', e => {
//     if (teams.length) {
//       const activeTeamId = parseInt(document.querySelectorAll('#active-team')[0].value);
//       const activeTeam = teams.filter(team => team.id === activeTeamId)[0];

//       activeTeam.score += parseInt(e.target.dataset.scoreMod);
//       updateTeamData();
//     }
//   });
// });
