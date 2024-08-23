import { Journey } from './journey.js';

let journey;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    try {
        journey = new Journey();
        console.log('Journey instance created:', journey);
        document.getElementById('proceedButton').addEventListener('click', () => journey.proceedToNextStep());
        journey.start();
    } catch (error) {
        console.error('Error creating or starting Journey:', error);
    }

    // Make functions globally accessible
    window.submitArtifact = () => journey.submitArtifact();
    window.setHospiceParameters = () => journey.setHospiceParameters();

    // Handle quote expansion
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('expand-quote')) {
            const quote = event.target.nextElementSibling;
            if (quote.style.display === 'none') {
                quote.style.display = 'block';
                event.target.textContent = '[Collapse Quote]';
            } else {
                quote.style.display = 'none';
                event.target.textContent = '[Expand Quote]';
            }
        }
    });

    // Handle digital will actions
    document.body.addEventListener('click', (event) => {
        if (event.target.id === 'save-will') {
            const willContent = document.getElementById('digital-will-content').value;
            // Save will content (you might want to send this to a server in a real application)
            console.log('Will saved:', willContent);
        } else if (event.target.id === 'download-will') {
            const willContent = document.getElementById('digital-will-content').value;
            const blob = new Blob([willContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'digital_will.txt';
            a.click();
            URL.revokeObjectURL(url);
        }
    });
});