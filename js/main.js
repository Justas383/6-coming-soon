
import {progressBarData} from './data/progressBarData.js';
import {renderProgressBar} from './components/progress-bar/renderProgressBar.js';

import {socialsData} from './components/socials/socialsData.js'
import {renderSocials} from './components/socials/renderSocials.js'

import {Clock} from './components/clock/clock.js'

import {formValidation} from './components/form/formValidation.js'

const clock = new Clock('.hero .clock', {
    month: 1,
    day: 1, 
    hour:0,
    minutes: 0 
});
clock.init();

const clock2 = new Clock('sadasda');
clock2.init();


renderProgressBar('.left', progressBarData);

renderSocials('footer > .row-long', socialsData);

formValidation();


