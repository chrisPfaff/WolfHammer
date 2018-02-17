const submit = document.querySelector(".submit");
const set_teams = document.querySelector('.set_teams');

let array = [];

document.addEventListener("click", event => {
  if (!array.includes(event.target) && event.target.matches("input")) {
    countCheckboxes(event.target, set_teams);
  } else {
    removeVal(array, event.target);
  }
  return array;
});

function countCheckboxes(check_value, parentElement) {
  if (check_value.checked) {
    var newElem = document.createElement('p');
    var name = document.createTextNode(check_value.name);
    // name = JSON.stringify(name);
    newElem.classList.add('teamz');
    newElem.appendChild(name);
    parentElement.appendChild(newElem);
  } else if (!check_value.checked) {
    const teamz = set_teams.querySelectorAll('.teamz');

    teamz.forEach(team => {
      if (check_value.name === team.textContent) {
      parentElement.removeChild(team);
    }});
  }
    // if (teamz.textContent === check_value.checked)
    // parentElement.remove(teamz[0]);
}

function removeVal(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == val) arr.splice(i, 1);
  }
}

submit.addEventListener("click", () => {
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
