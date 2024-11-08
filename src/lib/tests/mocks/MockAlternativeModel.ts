import AlternativeModel from "$lib/domain/AlternativeModel"

const mockAlternativeModelA: AlternativeModel = {
    letter: "A",
    text: "Texto da alternativa A",
    file: "https://www.example.com",
    isCorrect: true,
}

const mockAlternativeModelB: AlternativeModel = {
    letter: "B",
    text: "Texto da alternativa B",
    file: "https://www.example.com",
    isCorrect: false,
}

const mockAlternativeModelC: AlternativeModel = {
    letter: "C",
    text: "Texto da alternativa C",
    file: "https://www.example.com",
    isCorrect: false,
}

const mockAlternativeModelD: AlternativeModel = {
    letter: "D",
    text: "Texto da alternativa D",
    file: "https://www.example.com",
    isCorrect: false,
}

export const mockAlternatives: AlternativeModel[] = [
    mockAlternativeModelA,
    mockAlternativeModelB,
    mockAlternativeModelC,
    mockAlternativeModelD,
]