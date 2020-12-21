
import {progressBarData} from './data/progressBarData.js';
import {renderProgressBar} from './components/progress-bar/renderProgressBar.js';

import {socialsData} from './components/socials/socialsData.js'
import {renderSocials} from './components/socials/renderSocials.js'

renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long', socialsData);

console.log('js is running here');

