import * as React from 'react';
import {ChangeEvent} from "react";
import Search from "./Search";
import {List} from "./List";
import {NewsStories, NewsStory} from "./NewsStories";
import getAsyncStories from "./Fetch";
import './App.css';

const App = () => {
    const [stories, setStories] = React.useState([] as NewsStory[]);
    React.useEffect(() => {
        getAsyncStories().then((result: NewsStories) => {
            setStories(result.stories);
        });
    }, []);

    const [searchTerm, setSearchTerm] = React.useState('');
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const searchedStories: NewsStories = { stories: stories.filter((story) =>
        story.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )};
    return (
        <div className="container">
            <h1 className="headline-primary">My News Stories</h1>
            <Search search={searchTerm} onSearch={handleSearch} />
            <hr />
            <List list={searchedStories} />
        </div>
    );
};

export default App;