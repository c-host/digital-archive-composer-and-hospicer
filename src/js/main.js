document.addEventListener('DOMContentLoaded', () => {
    const journey = new Journey();
    document.getElementById('proceedButton').addEventListener('click', () => journey.proceedToNextStep());
    journey.proceedToNextStep(); // Start the journey
});