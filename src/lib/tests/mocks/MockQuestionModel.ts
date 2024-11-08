import type QuestionModel from "$lib/domain/QuestionModel";
import { mockAlternatives } from "./MockAlternativeModel";

export const mockQuestionModel: QuestionModel = {
    title: "Questão 1 - ENEM 2020",
    index: 1,
    discipline: "linguagens",
    language: "ingles",
    year: 2020,
    context: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    files: [
        "https://enem.dev/2020/questions/1-ingles/6e1ca12e-9bc4-472b-8809-84e7e394714a.png"
    ],
    correctAlternative: "A",
    alternativesIntroduction: "Responda a questão com base na imagem abaixo:",
    alternatives: mockAlternatives,
}