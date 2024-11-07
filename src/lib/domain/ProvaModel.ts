import type LanguageModel from "./LanguageModel";

export default class ProvaModel {
    title: string;
    year: number;
    disciplines: object[];
    languages: LanguageModel[];

    constructor(
        title: string,
        year: number,
        disciplines: object[],
        languages: LanguageModel[],
    ) {
        this.title = title;
        this.year = year;
        this.disciplines = disciplines;
        this.languages = languages;
    }
}