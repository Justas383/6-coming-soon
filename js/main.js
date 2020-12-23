
import {progressBarData} from './data/progressBarData.js';
import {renderProgressBar} from './components/progress-bar/renderProgressBar.js';

import {socialsData} from './components/socials/socialsData.js'
import {renderSocials} from './components/socials/renderSocials.js'
import {Clock} from './components/clock/clock.js'


const clock = new Clock
console.log(clock)

renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long', socialsData);

renderClock('.row-short > .clock', clockData)

console.log('js is running here');

