import score from './js/score.js';
import rules from './js/rules.js';
import checkbox from './js/checkbox.js';
// import wolfImage from '././img/wolf.jpg';
// import sandy from '././img/sand.jpg'
// import bugler from './.img/bugler.jpg'
// import saddam from '././img/saddam.jpg';
import './scss/variables.scss';
import './scss/mixins.scss';
import './scss/components/players.scss';
import './scss/base.scss';

// imports all images
function requireAll(image) { image.keys().forEach(image); }
requireAll(require.context('./img/', true));

console.log('The Wolf is coming!');

if (module.hot) {
  module.hot.accept();
}