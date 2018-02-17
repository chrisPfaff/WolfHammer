const submit = document.querySelector(".submit");
const setTeams = document.querySelector('.set_teams');

let array = [];

document.addEventListener("click", event => {
  if (!array.includes(event.target) && event.target.matches("input")) {
    countCheckboxes(event.target, setTeams);
  } else {
    removeVal(array, event.target);
  }
  return array;
});

function countCheckboxes(checkValue, parentElement) {
  if (checkValue.checked) {
    var newElem = document.createElement('p');
    var name = document.createTextNode(checkValue.name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  } else if (!checkValue.checked) {
    const teamz = setTeams.querySelectorAll('.teamz');

    teamz.forEach(team => {
      if (checkValue.name === team.textContent) {
      parentElement.removeChild(team);
    }});
  }
}

function removeVal(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) arr.splice(i, 1);
  }
}

submit.addEventListener("click", (event) => {
  const checkboxes = document.querySelectorAll('input');
  const paused = submit.classList.toggle('paused');
  event.preventDefault();

  if (paused) {
    submit.textContent = 'edit teams';
    checkboxes.forEach(checkbox => checkbox.setAttribute('disabled', true));
  } else {
    submit.textContent = 'Set Teams';
    checkboxes.forEach(checkbox => checkbox.removeAttribute('disabled'));
  }

  console.log(setTeams);
  const newArray = Array.from(array);
  let total = 0;

  newArray.map((item, i) => {
    total += Number(item.value);
    if (newArray.length === 3) {
      console.log('lone wolf', total)
      total = total * 3;
      return total;
    } else {
      console.log(total);
      return total;
    }
  })
});
