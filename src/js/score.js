const scoreBoard = document.querySelector('.score');
const dots = Array.from(document.querySelectorAll('.dots'));
let score = 0;


function calculateScore(event) {
  event.preventDefault();
  const current = event.target;
  scoreBoard.innerHTML = `Score: ${score += Number(current.getAttribute('data-dot'))}`
}

dots.forEach(dot => dot.addEventListener('click', calculateScore));
