import AlternativeModel from './AlternativeModel';

export default class QuestionModel {
    title: string;
    index: number;
    discipline: string;
    language: string;
    year: number;
    context: string;
    files: string[];
    correctAlternative: string;
    alternativesIntroduction: string;
    alternatives: AlternativeModel[];

    constructor(
        title: string,
        index: number,
        discipline: string,
        language: string,
        year: number,
        context: string,
        files: string[],
        correctAlternative: string,
        alternativesIntroduction: string,
        alternatives: AlternativeModel[]
    ) {
        this.title = title;
        this.index = index;
        this.discipline = discipline;
        this.language = language;
        this.year = year;
        this.context = context;
        this.files = files;
        this.correctAlternative = correctAlternative;
        this.alternativesIntroduction = alternativesIntroduction;
        this.alternatives = alternatives;
    }
}