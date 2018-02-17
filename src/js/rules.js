const rules = Array.from(document.querySelectorAll('.rule'));

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

rules.forEach(rule => rule.addEventListener('click', getRule));
