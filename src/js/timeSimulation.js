export class TimeSimulation {
    constructor(hospiceParameters, originalArtifact, secondLossRisk) {
        this.hospiceParameters = hospiceParameters;
        this.originalArtifact = originalArtifact;
        this.secondLossRisk = secondLossRisk;
        this.currentYear = 0;
        this.reflectionSubmitted = false;
        this.simulationComplete = false;
        this.userReflections = [];
    }

    addTimeSimulation() {
        const simulationContent = `
            <p id="currentTime">Current Time: Year 0</p>
            <div id="transformedArtifact"></div>
            <div id="reflectionPrompt"></div>
            <div id="digitalWill"></div>
        `;
        document.getElementById('journey').insertAdjacentHTML('beforeend', simulationContent);

        this.updateReflectionPrompt(0);
        this.updateDigitalWill();
    }

    updateReflectionPrompt(year) {
        const reflectionPrompt = document.getElementById('reflectionPrompt');
        if (!reflectionPrompt) return;

        const cellsReplaced = Math.floor(year * 365 * 300000000);
        const secondLossChance = Math.max(this.secondLossRisk * (1 - year / this.hospiceParameters.retentionPeriod), 0);

        let prompt = `
            <h4>Reflection Point: Year ${year}</h4>
            <p>In the ${year} years since this memory was created:</p>
            <ul>
                <li>You've replaced approximately ${cellsReplaced.toLocaleString()} skin cells.</li>
                <li>This digital artifact has been accessed ${Math.floor(year / this.getAccessInterval())} times.</li>
                <li>The chance of experiencing a 'second loss' of this memory is now ${secondLossChance.toFixed(2)}%.</li>
            </ul>
            <h4>Reflection Question:</h4>
            <p>${this.getReflectionQuestion(year)}</p>
            <textarea class="reflection-input" placeholder="Type your reflection here..."></textarea>
            <button class="submit-reflection button" data-year="${year}">Submit Reflection</button>
        `;

        reflectionPrompt.innerHTML = prompt;

        reflectionPrompt.querySelector('.submit-reflection').addEventListener('click', () => {
            const reflectionText = reflectionPrompt.querySelector('.reflection-input').value;
            this.userReflections.push({ year: this.currentYear, text: reflectionText });
            this.reflectionSubmitted = true;
            this.currentYear++;
            if (this.currentYear <= this.hospiceParameters.retentionPeriod) {
                document.getElementById('currentTime').textContent = `Current Time: Year ${this.currentYear}`;
                this.updateTransformedArtifact(this.currentYear);
                this.updateReflectionPrompt(this.currentYear);
            } else {
                this.endSimulation();
            }
            this.updateDigitalWill();
            this.checkAllReflectionsSubmitted();
        });
    }

    updateDigitalWill() {
        const digitalWill = document.getElementById('digitalWill');
        const willContent = this.generateDigitalWill();
        digitalWill.innerHTML = `
            <h3>Your Digital Will</h3>
            <p>You can edit your digital will at any time. Your reflections are automatically added.</p>
            <textarea id="digital-will-content">${willContent}</textarea>
            <button id="save-will" class="button">Save Changes</button>
            <button id="download-will" class="button">Download Will</button>
        `;
    }

    generateDigitalWill() {
        let willContent = "My Digital Will\n\n";
        willContent += `Retention Period: ${this.hospiceParameters.retentionPeriod} years\n`;
        willContent += `Access Frequency: ${this.hospiceParameters.accessFrequency}\n`;
        willContent += `End-of-Life Action: ${this.hospiceParameters.endOfLifeAction}\n\n`;
        willContent += "My Reflections:\n";
        for (let year = 0; year <= this.currentYear; year++) {
            const reflection = this.userReflections.find(r => r.year === year);
            if (reflection) {
                willContent += `Year ${year}: ${reflection.text}\n\n`;
            }
        }
        return willContent;
    }

    getReflectionQuestion(year) {
        const questions = [
            "How do you feel about setting parameters for the future of this memory?",
            "How has your perception of this digital memory changed since it was first created?",
            "In what ways might this digital artifact have been transformed or commodified by service providers?",
            "How does the concept of 'digital dasein' relate to your experience with this memory?",
            "How does the risk of 'second loss' affect your feelings about this memory?",
            "How might this digital hospicing process relate to traditional practices of remembrance and letting go?"
        ];
        const index = year % questions.length;
        return questions[index];
    }

    getAccessInterval() {
        switch (this.hospiceParameters.accessFrequency) {
            case 'high': return 1 / 52; // weekly
            case 'medium': return 1 / 12; // monthly
            case 'low': return 1; // yearly
            default: return 1;
        }
    }

    updateTransformedArtifact(year) {
        // Implement artifact transformation over time
    }

    checkAllReflectionsSubmitted() {
        if (this.userReflections.length === this.hospiceParameters.retentionPeriod + 1) {
            document.getElementById('proceedButton').style.display = 'block';
        }
    }

    endSimulation() {
        this.simulationComplete = true;
        const journeyElement = document.getElementById('journey');
        journeyElement.insertAdjacentHTML('beforeend', '<p>Hospicing process complete.</p>');
        this.checkAllReflectionsSubmitted();
    }
}