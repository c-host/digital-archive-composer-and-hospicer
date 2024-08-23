import { Journey } from './journey.js';

let journey;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    try {
        journey = new Journey();
        console.log('Journey instance created:', journey);

        const proceedButton = document.getElementById('proceedButton');
        if (proceedButton) {
            console.log('Proceed button found, adding event listener');
            proceedButton.addEventListener('click', () => {
                console.log('Proceed button clicked');
                journey.proceedToNextStep();
            });
        } else {
            console.error('Proceed button not found in the DOM');
        }

        journey.start();
    } catch (error) {
        console.error('Error creating or starting Journey:', error);
    }

    // Make functions globally accessible
    window.submitArtifact = () => {
        console.log('Global submitArtifact function called');
        journey.submitArtifact();
    };
    window.setHospiceParameters = () => journey.setHospiceParameters();

    // Handle image upload preview
    document.body.addEventListener('change', (event) => {
        if (event.target.id === 'image') {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const preview = document.createElement('img');
                    preview.src = e.target.result;
                    preview.style.maxWidth = '100%';
                    preview.style.height = 'auto';
                    const container = event.target.parentElement;
                    const existingPreview = container.querySelector('img');
                    if (existingPreview) {
                        container.removeChild(existingPreview);
                    }
                    container.appendChild(preview);
                };
                reader.readAsDataURL(file);
            }
        }
    });
});