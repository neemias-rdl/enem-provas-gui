export default class ProvaModel {
    title: string;
    year: number;
    disciplines: object[];
    languages: object[];

    constructor(
        title: string,
        year: number,
        disciplines: object[],
        languages: object[],
    ) {
        this.title = title;
        this.year = year;
        this.disciplines = disciplines;
        this.languages = languages;
    }
}