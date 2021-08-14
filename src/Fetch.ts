import {NewsStories} from "./NewsStories";

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const getAsyncStories = (): Promise<NewsStories> =>
    fetch(API_ENDPOINT + 'React')
        .then((response) => response.json())
        .then((result) =>
            ({ stories: result.hits })
        )
        .catch(() =>
            ({ stories: [] }) // error fallback: would be better to display an error message here!
        );

export default getAsyncStories;
