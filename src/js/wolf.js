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
  array.filter(rules => {
    if (rules.classList.contains('active')) {
      [first, second] = [second, first];
      console.log(first);
      dots = dots + 1;
      scoreBoard.innerHTML = `Score: ${dots}`;
    }
    // this.classList.toggle('opening');
    // setTimeout(() => {
    //   this.classList.toggle('open');
    // });
  });
  // console.log(array);
  // Array.from(rules.filter(active => active.classList.contains('active')));
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