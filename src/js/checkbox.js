const submit = document.querySelector(".submit");
const setTeams = document.querySelector('.set_teams');
const checkboxes = document.querySelectorAll('input');
const teamz = setTeams.querySelectorAll('.teamz');

let teams = [];

document.addEventListener("click", event => {
  if (!teams.includes(event.target) && event.target.matches("input")) {
    createTeams(event.target, setTeams);
  } else {
    removeTeam(checkboxes, event.target);
  }
  return teams;
});

function createTeams(checkValue, parentElement) {
  if (checkValue.checked) {
    var newElem = document.createElement('p');
    var name = document.createTextNode(checkValue.name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  } else if (!checkValue.checked) {
    teamz.forEach(team => {
      if (checkValue.name === team.textContent) {
      parentElement.removeChild(team);
    }});
  }
}

function removeTeam(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) arr.splice(i, 1);
  }
}

function settingTeams(arr, target) {
  const players = Array.from(document.querySelectorAll('input:checked')).map(input => {
    return {
      id: input.id,
      name: input.name,
      score: 0
    };
  });

  if (players.length) {
    teams.push({
      players,
      score: 0,
      id: teams.length
    })
  } else {
      console.log('delete', target.id);
      removeTeam(arr, target);
  }
}


submit.addEventListener("click", (event) => {
  const paused = submit.classList.toggle('paused');
  event.preventDefault();
  settingTeams(checkboxes, event.target.id)

  if (paused) {
    submit.textContent = 'edit teams';
    checkboxes.forEach(checkbox => checkbox.setAttribute('disabled', true));
  } else {
    submit.textContent = 'Set Teams';
    checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'));
  }

  // console.log(setTeams);
  // const newArray = Array.from(array);
  // let total = 0;

  // newArray.map((item, i) => {
  //   total += Number(item.value);
  //   if (newArray.length === 3) {
  //     console.log('lone wolf', total)
  //     total = total * 3;
  //     return total;
  //   } else {
  //     console.log(total);
  //     return total;
  //   }
  // })
});

const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));

let score = 0;

function calculateScore(event, target) {
  event.preventDefault();
  const current = event.target;
  if (teams.length) {

    const activeTeamID = teams.filter(team => team.players[0]);

    // const {name, id} = activeTeamID.players;
    // const { score } = activeTeamID;

    // console.log(name, score, id);

   // const activeTeamId = teams.filter(team => team.players[0]);
    const activeTeam = activeTeamID.filter(team => team.id === activeTeamID[0].id)[0];

    //activeTeam.score += `Score: ${score += Number(current.getAttribute('data-dot'))}`
    // const activeTeamId = parseInt(document.querySelectorAll('#active-team')[0].value);
    //activeTeam.score += parseInt(current.dataset.dot);
    //activeTeam.innerHTML = `Score: ${score} += Number(current.getAttribute('data-dot'))}`
    activeTeam.score += parseInt(current.dataset.dot);
    updateTeamData(activeTeam);
  }
}

dots.forEach(dot => dot.addEventListener('click', calculateScore));


const updateTeamData = (activeTeam) => {
  activeTeam.players.forEach((player, index) => {
    document.querySelectorAll('.teamz')[index].innerHTML = `${player.name} has ${activeTeam.score} dots.`
  })
};



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
