import 'regenerator-runtime';
import './style/style.css';
import '../node_modules/particles.js/particles'
import main from './script/view/main.js';
import pjsConfig from './assets/particles.json';

particlesJS('particles-js', pjsConfig);

document.addEventListener("DOMContentLoaded", main);
