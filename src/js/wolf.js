console.log('The Wolf is coming!');

const rules = Array.from(document.querySelectorAll('.rule'));
const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
let score = 0;

rules.forEach(rule => rule.addEventListener('click', getRule));
dots.forEach(dot => dot.addEventListener('click', calculateScore));

function getRule() {
  let first = 'opening';
  let second = 'open';
  this.classList.toggle('active');

  rules.filter((rule => {
    const active = rule.classList.contains('active');
    if (active) {
      [first, second] = [second, first];
    }
  }))
}

function calculateScore(e) {
  e.preventDefault();
  const current = e.target;
  scoreBoard.innerHTML = `Score: ${score += Number(current.getAttribute('data-dot'))}`
}

  // let pos = 0;
  // let array = [];

  // array[pos] = dots;
  // pos++;

  // console.log(array);
  // const array = [];
  // array.push(dots);
  // console.log(array);
  // const dotScore = dots.getAttribute('data-dot');
  // console.log('dots', dotScore);

  // if (dots.classList.contains('active')) {
  //   scoreBoard.innerHTML = `Score: ${score += Number(dotScore)}`
  // }

// function getActive() {
//   let dots = 0;

//   if (activePoints) {
//     console.log(active)
//   }
//   const activePoints = this.classList.contains('active');

//   if (activePoints) {
//     dots++;
//     console.log(dots);
//   }
// }

// const times = Array.from(document.querySelectorAll('[data-time]'));

//     // Filter for only the elements that contain the word 'flexbox'
//     const flexItems = times
//         .filter(item => item.textContent.includes('Flexbox'))
//         //map down to a list of time strings
//         .map(item => item.dataset.time) // data-time
//         // map to an array of seconds
//         .map(timecode => {
//             const parts = timecode.split(':').map(part => parseFloat(part));
//             return (parts[0] * 60) + parts[1];
//         })
//         .reduce((total, seconds) => total + seconds, 0)

//     // reduce to get total
//     console.log(flexItems);
