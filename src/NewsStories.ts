
export interface NewsStory {
    objectID: number;
    title: string;
    url: string;
    author: string;
    num_comments: number;
    points: number;
};

export interface NewsStories {
    stories: NewsStory[];
};
