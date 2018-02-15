const submit = document.querySelector(".submit");

let array = [];

document.addEventListener("click", event => {
  if (!array.includes(event.target) && event.target.matches("input")) {
    array.push(event.target);
  } else {
    removeVal(array, event.target);
  }
  return array;
});

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
