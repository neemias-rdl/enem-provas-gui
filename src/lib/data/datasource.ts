import ProvaModel from '../domain/ProvaModel';
import LanguageModel from '$lib/domain/LanguageModel';

const baseUrl = 'https://api.enem.dev/v1/';


async function getProvas()  {
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
            console.log(data);

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

            console.log(parsedResponse);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    return parsedResponse;
}

export default getProvas;