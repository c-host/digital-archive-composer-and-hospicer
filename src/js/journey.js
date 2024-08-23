import { TimeSimulation } from './timeSimulation.js';
import { Artifact } from './artifact.js';

export class Journey {
    constructor() {
        console.log('Journey class instantiated');
        this.currentStep = 0;
        this.hospiceParameters = {};
        this.originalArtifact = Artifact.createDefault();
        this.secondLossRisk = 0;
        this.userReflections = [];
        this.usedQuotes = new Set();
        this.quotes = [
            {
                context: "On digital afterlives",
                quote: "Our way of being alive online has become less distinguishable from how the actually dead are represented and packaged to us.",
                step: 'upload'
            },
            {
                context: "On the commodification of digital memories",
                quote: "Capital has the effect of rendering us dead before we've drawn our last breath. Online, we constantly interface with non-human, capital-driven profiles of the living and the dead.",
                step: 'memory-seed'
            },
            {
                context: "On digital essentialism",
                quote: "There is a contradiction of sorts in the phrase 'digital memories'. In particular the potential for transformation and archival are at odds with each other.",
                step: 'composted'
            },
            {
                context: "On the concept of 'second loss'",
                quote: "The potential loss or alteration of digital memories after the physical death of an individual creates a new form of grief, a 'second loss' that complicates our relationship with both the deceased and their digital remains.",
                step: 'hospiced'
            },
            {
                context: "On digital decay",
                quote: "Just as organic matter decays, digital information can degrade over time, challenging our assumptions about the permanence of digital data and mirrors the natural process of forgetting.",
                step: 'time-simulation'
            },
            {
                context: "On digital dasein",
                quote: "Within this digital dasein, the essence of the dead is digitally embodied in a form of posthumous essentialism and the idea that the essence of the dead continues to be 'somewhere' can bring comfort to the bereaved who are using digital memories and messages as important tools for their grief.",
                step: 'upload'
            },
            {
                context: "On perpetual bereavement",
                quote: "This perpetual state of bereavement, of infinitely recursive and unresolved loss is both the focus of this essay, and the obstacle to overcome in pursuit of an escape from second loss anxiety.",
                step: 'hospiced'
            },
            {
                context: "On the grief paradigm",
                quote: "Our experience of being digital is to be subject to a new grief paradigm, that emotional response to the containers we use to make meaning of, to make precious, both ourselves and the dead.",
                step: 'time-simulation'
            },
            {
                context: "On digital containers",
                quote: "We might think of our encounters with these data as digital containers, vessels into which we can pour meaning and form new memories; that is, ways of making the data precious.",
                step: 'memory-seed'
            },
            {
                context: "On digital anxiety",
                quote: "This anxiety is only felt on those occasions where the reality of the dependency is surfaced by an interruption, real or imagined, and access to the digital containers holding our memories are severed.",
                step: 'hospiced'
            },
            {
                context: "On digital transformation",
                quote: "Data can continue to be programmatically transformed in the afterlife leading to the formation of new and evolving memories, while archival imaginaries associated with the digital tend to imply perpetual preservation and unchanging essentialism.",
                step: 'composted'
            },
            {
                context: "On digital rituals",
                quote: "By continuing to pursue these lines of thought, we develop new ways of framing our interactions with the dead online, and may find pathways for breaking our calcified archival imaginaries and reimagine new ways of living with the data bodies we construct, inhabit, and inherit.",
                step: 'time-simulation'
            },
            {
                context: "On digital zombies",
                quote: "All of these are more palatable terms for what Bassett calls 'digital zombies' to describe the dead online as 'resurrected, reanimated, and socially active', digital artifacts that transcend their digital essentialism and become fully or partially alive in the online afterlife.",
                step: 'memory-seed'
            },
            {
                context: "On digital secondary burial",
                quote: "What surfaces in this initial review of AI projects are the ways in which they serve as an evolution of the digital containers we use for precious-making. In other words, they represent a step towards the conceptualization of digital secondary burial sites for sending our data bodies into the techno-astral plane.",
                step: 'composted'
            },
            {
                context: "On digital inheritance",
                quote: "The question that remains for us is whether the data arrives in this location transformed after a period of renegotiation or if it arrives unprocessed, still bound to and feeding into our anxieties.",
                step: 'time-simulation'
            },
            {
                context: "On service provider transformation",
                quote: "Those memorial pages, despite their disclaimer as a profile of a person no longer alive, and therefore not active on the platform, continue to be data-mined by the platform seeking ways to monetize the activity of those who engaged the memorial.",
                step: 'composted'
            },
            {
                context: "On archival imaginaries",
                quote: "Archival artifacts have a way of being rendered into commodities. Instead of developing practices that would allow us to observe decaying artifacts, if we encounter data bodies we want to make precious, our impulse is to view them through archival imaginaries of digital essentialism.",
                step: 'composted-reflection'
            }
        ];
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
        this.addRelevantQuote(this.steps[0].type); // Add the first relevant quote
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
            this.addRelevantQuote(step.type);
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

    addRelevantQuote(stepType) {
        const relevantQuote = this.quotes.find(q => q.step === stepType);
        if (relevantQuote && !this.usedQuotes.has(relevantQuote.quote)) {
            this.addExpandableQuote(relevantQuote.context, relevantQuote.quote);
            this.usedQuotes.add(relevantQuote.quote);
        }
    }

    addExpandableQuote(context, quote) {
        const quoteHTML = `
            <div class="quote-container">
                <p class="quote-context">${context}</p>
                <span class="expand-quote">[Expand Quote]</span>
                <p class="paper-quote" style="display: none;">"${quote}"</p>
            </div>
        `;
        this.addElement('quote', quoteHTML);
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
                
                <div id="secondLossRisk">Second Loss Risk: <span>0%</span></div>
                
                <button onclick="setHospiceParameters()">Set Parameters</button>
            </div>
        `;
        this.addElement('hospiced', hospiceForm);

        // Calculate initial second loss risk
        this.updateSecondLossRisk();

        // Add event listeners for real-time risk calculation
        ['retentionPeriod', 'accessFrequency', 'endOfLifeAction'].forEach(id => {
            document.getElementById(id).addEventListener('change', this.updateSecondLossRisk.bind(this));
        });
    }

    updateSecondLossRisk() {
        const retentionPeriod = parseInt(document.getElementById('retentionPeriod').value);
        const accessFrequency = document.getElementById('accessFrequency').value;
        const endOfLifeAction = document.getElementById('endOfLifeAction').value;

        let risk = 0;
        risk += retentionPeriod * 0.5;
        risk += accessFrequency === 'high' ? 30 : accessFrequency === 'medium' ? 20 : 10;
        risk += endOfLifeAction === 'archive' ? 10 : endOfLifeAction === 'delete' ? 30 : 20;

        risk = Math.min(risk, 100);
        document.getElementById('secondLossRisk').querySelector('span').textContent = `${risk.toFixed(2)}%`;
        this.secondLossRisk = risk;
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
            case 'high': risk += 30; break;
            case 'medium': risk += 20; break;
            case 'low': risk += 10; break;
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
        this.addRelevantQuote('memory-seed');
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
        this.addRelevantQuote('composted');
        this.addRelevantQuote('composted-reflection');
    }

    addTimeSimulation() {
        const timeSimulation = new TimeSimulation(this.hospiceParameters, this.originalArtifact, this.secondLossRisk);
        timeSimulation.addTimeSimulation();
        this.addRelevantQuote('time-simulation');

        // Add event listener for reflection submissions
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('submit-reflection')) {
                const textarea = event.target.previousElementSibling;
                if (textarea && textarea.tagName === 'TEXTAREA') {
                    const year = parseInt(event.target.dataset.year);
                    const text = textarea.value;
                    this.submitReflection(year, text);
                }
            }
        });
    }

    addReflectionQuestion(question, year) {
        const questionHTML = `
            <div class="reflection-question">
                <p>${question}</p>
                <textarea class="reflection-input" placeholder="Type your reflection here..."></textarea>
                <button class="submit-reflection" data-year="${year}">Submit Reflection</button>
            </div>
        `;
        this.addElement('reflection', questionHTML);
    }

    submitReflection(year, text) {
        this.userReflections.push({ year, text });
        this.updateDigitalWill();
    }

    updateDigitalWill() {
        const willContent = this.generateDigitalWill();
        const willHTML = `
            <div class="digital-will">
                <h3>Your Digital Will</h3>
                <textarea id="digital-will-content">${willContent}</textarea>
                <button id="save-will">Save Changes</button>
                <button id="download-will">Download Will</button>
            </div>
        `;
        const existingWill = document.querySelector('.digital-will');
        if (existingWill) {
            existingWill.innerHTML = willHTML;
        } else {
            this.addElement('will', willHTML);
        }
    }

    generateDigitalWill() {
        // Generate will content based on user reflections and hospice parameters
        let willContent = "My Digital Will\n\n";
        willContent += `Retention Period: ${this.hospiceParameters.retentionPeriod} years\n`;
        willContent += `Access Frequency: ${this.hospiceParameters.accessFrequency}\n`;
        willContent += `End-of-Life Action: ${this.hospiceParameters.endOfLifeAction}\n\n`;
        willContent += "My Reflections:\n";
        this.userReflections.forEach(reflection => {
            willContent += `Year ${reflection.year}: ${reflection.text}\n\n`;
        });
        return willContent;
    }
}