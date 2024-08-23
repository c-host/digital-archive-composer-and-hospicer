import { TimeSimulation } from './timeSimulation.js';
import { Artifact } from './artifact.js';

export class Journey {
    constructor() {
        console.log('Journey class instantiated');
        this.currentStep = 0;
        this.hospiceParameters = {};
        this.originalArtifact = Artifact.createDefault();
        this.secondLossRisk = 0; // New property to track risk of second loss
        this.steps = [
            { type: 'story', content: "Welcome to the Digital Composting & Hospicing Journey. I'm Rem, your guide through this exploration of digital afterlives and the commodification of our online memories." },
            { type: 'upload', content: "Let's begin by uploading a digital artifact - this could be an Intentional Digital Memory (IDM) or an Accidental Digital Memory (ADM). Please provide details about a significant memory you'd like to process." },
            { type: 'story', content: "Thank you for sharing this memory. We'll now create a 'memory seed', demonstrating how digital memories can be transformed and compressed, challenging the notion of digital essentialism." },
            { type: 'memory-seed', content: "Creating memory seed..." },
            { type: 'story', content: "Next, we'll further distill the memory seed. This process reflects on how our digital legacies might evolve over time, and how service providers might transform our data." },
            { type: 'composted', content: "Composting memory..." },
            { type: 'story', content: "Now that we've composted the memory, let's set up 'hospice parameters' for your digital artifact. This step explores how we might care for our distilled digital legacies, and the anxieties that come with potential 'second loss'." },
            { type: 'hospiced', content: "Setting up hospice..." },
            { type: 'story', content: "Let's observe how your composted digital artifact transforms over time, reflecting on the concept of 'digital dasein' and the evolving nature of our online presence." },
            { type: 'time-simulation', content: "Time Simulation" },
            { type: 'story', content: "This journey demonstrates the complexities of our digital afterlives, the commodification of our memories, and the need for new rituals in the digital age." }
        ];
    }

    start() {
        console.log('Journey started');
        this.proceedToNextStep();
    }

    addElement(type, content) {
        const element = document.createElement('div');
        element.className = `element ${type}`;
        element.innerHTML = content;
        document.getElementById('journey').appendChild(element);
    }

    proceedToNextStep() {
        if (this.currentStep < this.steps.length) {
            const step = this.steps[this.currentStep];
            switch (step.type) {
                case 'story':
                    this.addElement('story', `<p>${step.content}</p>`);
                    break;
                case 'upload':
                    this.uploadArtifact();
                    document.getElementById('proceedButton').style.display = 'none';
                    break;
                case 'memory-seed':
                    this.createMemorySeed();
                    break;
                case 'composted':
                    this.createCompostedMemory();
                    break;
                case 'hospiced':
                    this.setupHospice();
                    document.getElementById('proceedButton').style.display = 'none';
                    break;
                case 'time-simulation':
                    this.addTimeSimulation();
                    break;
            }
            this.currentStep++;
        }
        if (this.currentStep >= this.steps.length) {
            document.getElementById('proceedButton').style.display = 'none';
            this.addFinalReflection();
        }
    }

    setHospiceParameters() {
        this.hospiceParameters = {
            retentionPeriod: parseInt(document.getElementById('retentionPeriod').value),
            accessFrequency: document.getElementById('accessFrequency').value,
            endOfLifeAction: document.getElementById('endOfLifeAction').value
        };

        // Calculate second loss risk based on parameters
        this.secondLossRisk = this.calculateSecondLossRisk();

        this.addElement('story', `<p>Rem: "These hospice parameters reflect our attempts to control our digital legacies. Your memory will be retained for ${this.hospiceParameters.retentionPeriod} years with ${this.hospiceParameters.accessFrequency} access frequency. At the end of its life, it will be ${this.hospiceParameters.endOfLifeAction}d. The risk of experiencing a 'second loss' with these parameters is ${this.secondLossRisk}%. Consider how this relates to the concept of 'perpetual bereavement' discussed in the 'Only Loss' paper."</p>`);

        document.getElementById('proceedButton').style.display = 'block';
    }

    calculateSecondLossRisk() {
        let risk = 0;

        // Higher retention period increases risk
        risk += this.hospiceParameters.retentionPeriod * 0.5;

        // Less frequent access increases risk
        switch (this.hospiceParameters.accessFrequency) {
            case 'high': risk += 10; break;
            case 'medium': risk += 20; break;
            case 'low': risk += 30; break;
        }

        // End-of-life action affects risk
        switch (this.hospiceParameters.endOfLifeAction) {
            case 'archive': risk += 10; break;
            case 'delete': risk += 30; break;
            case 'repurpose': risk += 20; break;
        }

        return Math.min(risk, 100); // Cap risk at 100%
    }

    addFinalReflection() {
        const reflectionContent = `
            <h3>Journey Complete: Reflecting on Digital Afterlives</h3>
            <p>As we conclude this journey, consider the following questions:</p>
            <ul>
                <li>How does this experience relate to the concept of 'digital dasein' discussed in the paper?</li>
                <li>In what ways might our digital legacies be commodified by service providers?</li>
                <li>How can we develop new rituals for managing our digital afterlives?</li>
                <li>What are the implications of 'second loss' in the digital age?</li>
                <li>How might we balance the desire for digital preservation with the need for digital decay?</li>
            </ul>
            <p>These questions can serve as starting points for our group discussion on the 'Only Loss' paper and our digital futures.</p>
        `;
        this.addElement('final-reflection', reflectionContent);
    }

    uploadArtifact() {
        const uploadForm = `
            <div class="artifact-input">
                <h3>Upload Digital Artifact</h3>
                <p>Please fill in the details about your digital memory. For testing purposes, the form is pre-filled with dummy data.</p>
                
                <label for="title">Title: <span class="info">(A brief, descriptive name for your memory)</span></label>
                <input type="text" id="title" value="Summer Vacation in Paris" required>
                
                <label for="description">Description: <span class="info">(Provide a detailed account of your memory)</span></label>
                <textarea id="description" required>Standing in front of the Eiffel Tower, feeling on top of the world. The city lights twinkled below as the sun set, painting the sky in vibrant oranges and pinks.</textarea>
                
                <label for="date">Date: <span class="info">(When did this memory occur?)</span></label>
                <input type="date" id="date" value="2022-07-15" required>
                
                <label for="location">Location: <span class="info">(Where did this memory take place?)</span></label>
                <input type="text" id="location" value="Paris, France" required>
                
                <label for="people">People: <span class="info">(Who was involved in this memory? Separate names with commas)</span></label>
                <input type="text" id="people" value="Sarah, John, Emma" required>
                
                <label for="emotions">Emotions: <span class="info">(What feelings are associated with this memory? Separate emotions with commas)</span></label>
                <input type="text" id="emotions" value="Excited, Awestruck, Joyful" required>
                
                <label for="type">Type: <span class="info">(What kind of digital artifact is this?)</span></label>
                <select id="type" required>
                    <option value="personal">Personal (e.g., diary entry, personal photo)</option>
                    <option value="social media" selected>Social Media (e.g., Facebook post, Instagram photo)</option>
                    <option value="professional">Professional (e.g., work document, LinkedIn post)</option>
                </select>
                
                <label for="intentionality">Intentionality: <span class="info">(Was this memory deliberately created or accidentally captured?)</span></label>
                <select id="intentionality" required>
                    <option value="IDM" selected>Intentional Digital Memory (IDM) - deliberately created</option>
                    <option value="ADM">Accidental Digital Memory (ADM) - unintentionally captured</option>
                </select>
                
                <button onclick="submitArtifact()">Submit</button>
            </div>
        `;
        this.addElement('upload', uploadForm);
    }

    submitArtifact() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const location = document.getElementById('location').value;
        const people = document.getElementById('people').value.split(',').map(p => p.trim());
        const emotions = document.getElementById('emotions').value.split(',').map(e => e.trim());
        const type = document.getElementById('type').value;
        const intentionality = document.getElementById('intentionality').value;

        this.originalArtifact = new Artifact(title, description, date, location, people, emotions, null, type, intentionality);

        this.addElement('story', `<p>Thank you for sharing your ${intentionality} artifact. Let's proceed with creating a memory seed.</p>`);
        document.getElementById('proceedButton').style.display = 'block';
    }

    createMemorySeed() {
        const seedContent = `
            <div class="memory-seed">
                <h3>Memory Seed</h3>
                <p>Title: ${this.originalArtifact.title}</p>
                <p>Date: ${this.originalArtifact.date}</p>
                <p>Location: ${this.originalArtifact.location}</p>
                <p>Key People: ${this.originalArtifact.people.slice(0, 2).join(', ')}</p>
                <p>Primary Emotion: ${this.originalArtifact.emotions[0]}</p>
                <p>Brief Description: ${this.originalArtifact.description.split(' ').slice(0, 20).join(' ')}...</p>
            </div>
        `;
        this.addElement('memory-seed', seedContent);
        this.addElement('story', `<p>Rem: "This is your memory seed. It contains key elements of your original memory, compressed into a more compact form. This process begins to challenge the notion of digital essentialism by showing how memories can be condensed while still conveying core information. However, it's important to note that even this compression involves choices about what's 'essential', reflecting the complex nature of memory and digital representation."</p>`);
    }

    createCompostedMemory() {
        const compostedContent = `
            <div class="composted">
                <h3>Composted Memory</h3>
                <p>${this.originalArtifact.emotions[0]} in ${this.originalArtifact.location.split(',')[0]}</p>
                <p>${this.originalArtifact.description.split(' ').slice(0, 10).join(' ')}...</p>
            </div>
        `;
        this.addElement('composted', compostedContent);
        this.addElement('story', `<p>Rem: "This is your composted memory. It's been further distilled, demonstrating how digital memories might evolve and transform over time. This process mimics how our organic memories change and fade, directly challenging the notion of unchanging digital permanence."</p>`);
    }

    setupHospice() {
        const hospiceForm = `
            <div class="hospice-settings">
                <h3>Set Hospice Parameters</h3>
                <p>These parameters will determine how your composted memory is cared for in its digital afterlife.</p>
                
                <label for="retentionPeriod">Retention Period (years): <span class="info">(How long should this memory be kept?)</span></label>
                <input type="number" id="retentionPeriod" min="1" max="100" value="10" required>
                
                <label for="accessFrequency">Access Frequency: <span class="info">(How often should this memory be accessed?)</span></label>
                <select id="accessFrequency" required>
                    <option value="high">High (weekly)</option>
                    <option value="medium" selected>Medium (monthly)</option>
                    <option value="low">Low (yearly)</option>
                </select>
                
                <label for="endOfLifeAction">End-of-Life Action: <span class="info">(What should happen to this memory at the end of its retention period?)</span></label>
                <select id="endOfLifeAction" required>
                    <option value="archive">Archive</option>
                    <option value="delete">Delete</option>
                    <option value="repurpose">Repurpose</option>
                </select>
                
                <button onclick="setHospiceParameters()">Set Parameters</button>
            </div>
        `;
        this.addElement('hospiced', hospiceForm);
    }

    addTimeSimulation() {
        const timeSimulation = new TimeSimulation(this.hospiceParameters, this.originalArtifact, this.secondLossRisk);
        timeSimulation.addTimeSimulation();
    }
}