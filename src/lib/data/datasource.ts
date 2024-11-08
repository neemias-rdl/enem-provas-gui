import ProvaModel from '../domain/ProvaModel';
import LanguageModel from '$lib/domain/LanguageModel';
import QuestionModel from '$lib/domain/QuestionModel';
import AlternativeModel from '$lib/domain/AlternativeModel';

const baseUrl = 'https://api.enem.dev/v1/';


async function getProvas(): Promise<ProvaModel[]>  {
    let parsedResponse: ProvaModel[] = [];

    const getPovasUrl = `${baseUrl}exams`;

    await fetch(getPovasUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();          
        })
        .then(data => {
            parsedResponse = data.map((item: any) => new ProvaModel(
                item.title,
                item.year,
                item.disciplines,
                item.languages.map((language: any) => new LanguageModel(
                        language.label,
                        language.value,
                    ),
                )
            ));
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    return parsedResponse;
}

async function getQuestoesByYear(year: string): Promise<QuestionModel[]> {
    let parsedResponse: QuestionModel[] = [];

    const getQuestoesByYearUrl = `${baseUrl}exams/${year}/questions`;

    await fetch(getQuestoesByYearUrl).then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        parsedResponse = data.questions.map((item: any) => new QuestionModel(
            item.title,
            item.index,
            item.discipline,
            item.language,
            item.year,
            item.context,
            item.files,
            item.correctAlternative,
            item.alternativesIntroduction,
            item.alternatives.map((alternative: any) => new AlternativeModel(
                alternative.letter,
                alternative.text,
                alternative.file,
                alternative.isCorrect
            ))
        ));

        console.log(parsedResponse);
    })

    return parsedResponse;

}

export {getProvas, getQuestoesByYear};