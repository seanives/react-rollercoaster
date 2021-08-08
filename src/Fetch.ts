import {NewsStories} from "./NewsStories";

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const getAsyncStories = (): Promise<NewsStories> =>
    fetch(API_ENDPOINT + 'react')
        .then((response) => response.json())
        .then((result) =>
            ({ stories: result.hits })
        )
        .catch(() =>
            ({ stories: [] })
        );

export default getAsyncStories;
