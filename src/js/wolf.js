console.log('The Wolf is coming!');

const rules = document.querySelectorAll('.rule');
const scoreBoard = document.querySelector('.score');

rules.forEach(rule => rule.addEventListener('click', getRule));


function getRule() {
  let dots = 0;
  let first = 'opening';
  let second = 'open';
  this.classList.toggle('active');
  const activePoints = this.classList.contains('active');

  const array = Array.from(rules);
  array.filter(function(rules) {
    if (rules.classList.contains('active')) {
      [first, second] = [second, first];
      console.log(first);
      dots = dots + 1;
      scoreBoard.innerHTML = `Score: ${dots}`;
    }
  });
}

function getActive() {
  let dots = 0;

  if (activePoints) {
    console.log(active)
  }
  const activePoints = this.classList.contains('active');

  if (activePoints) {
    dots++;
    console.log(dots);
  }
}