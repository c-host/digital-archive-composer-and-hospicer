console.log('main.js is being executed');

import { Journey } from './journey.js';

console.log('Journey has been imported:', Journey);

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    try {
        const journey = new Journey();
        console.log('Journey instance created:', journey);
        journey.start();
    } catch (error) {
        console.error('Error creating or starting Journey:', error);
    }
});