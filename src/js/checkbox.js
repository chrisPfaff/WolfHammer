const submit = document.querySelector(".submit");
const set_teams = document.querySelector('.set_teams');

let array = [];

document.addEventListener("click", event => {
  if (!array.includes(event.target) && event.target.matches("input")) {
    countCheckboxes(event.target, set_teams);
    console.log(typeof event.target);
    if (!event.target.checked) {
      set_teams.removeChild(event.target.lastChild);
    }
    // if (array.length >= 3) {
    //   return;
    // }
  } else {
    removeVal(array, event.target);
  }
  return array;
});

function countCheckboxes(check_value, parentElement) {
  const newElem = document.createElement('p');
  const name = document.createTextNode(check_value.name);
  // name = JSON.stringify(name);
  newElem.classList.add('teamz');

  newElem.appendChild(name);
  parentElement.appendChild(newElem);
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
