import { Language } from '../language/language.model';

export class Film {
    filmId: number;
    title: string;
    description: string;
    releaseYear: number;
    language: Language;
    originalLanguage: Language;
    rentalDuration: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    specialFeatures: string;
    lastUpdate: string;
    constructor() {

    }

}