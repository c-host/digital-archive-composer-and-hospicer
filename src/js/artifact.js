export class Artifact {
    constructor(title, description, date, location, people, emotions, image, type, intentionality) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.location = location;
        this.people = people;
        this.emotions = emotions;
        this.image = image; // This will be a data URL
        this.type = type; // 'personal', 'social media', 'professional', etc.
        this.intentionality = intentionality; // 'IDM' or 'ADM'
    }

    static createDefault() {
        return new Artifact(
            'Summer Vacation in Paris',
            'Standing in front of the Eiffel Tower, feeling on top of the world. The city lights twinkled below as the sun set, painting the sky in vibrant oranges and pinks.',
            '2022-07-15',
            'Paris, France',
            ['Sarah', 'John', 'Emma'],
            ['Excited', 'Awestruck', 'Joyful'],
            null, // We'll use null as the default, and let the user upload an image
            'social media',
            'IDM'
        );
    }
}