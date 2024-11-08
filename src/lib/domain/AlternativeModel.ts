export default class AlternativeModel {
    letter: string;
    text: string;
    file: string;
    isCorrect: boolean;

    constructor(
        letter: string,
        text: string,
        file: string,
        isCorrect: boolean
    ) {
        this.letter = letter;
        this.text = text;
        this.file = file;
        this.isCorrect = isCorrect;
    }
}