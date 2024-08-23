import { Journey } from './journey.js';

let journey; // Declare journey in a higher scope

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    try {
        journey = new Journey(); // Assign to the higher scoped variable
        console.log('Journey instance created:', journey);
        document.getElementById('proceedButton').addEventListener('click', () => journey.proceedToNextStep());
        journey.start();
    } catch (error) {
        console.error('Error creating or starting Journey:', error);
    }

    // Make submitArtifact and setHospiceParameters globally accessible
    window.submitArtifact = () => {
        if (journey && typeof journey.submitArtifact === 'function') {
            journey.submitArtifact();
        } else {
            console.error('Journey not initialized or submitArtifact is not a function');
        }
    };

    window.setHospiceParameters = () => {
        if (journey && typeof journey.setHospiceParameters === 'function') {
            journey.setHospiceParameters();
        } else {
            console.error('Journey not initialized or setHospiceParameters is not a function');
        }
    };

    // Handle quote expansion
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('expand-quote')) {
            const quote = event.target.closest('.quote-container').querySelector('.paper-quote');
            if (quote.style.display === 'none') {
                quote.style.display = 'block';
                event.target.textContent = '[Collapse Quote]';
            } else {
                quote.style.display = 'none';
                event.target.textContent = '[Expand Quote]';
            }
        }
    });
});