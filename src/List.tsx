import * as React from 'react';
import {NewsStories, NewsStory} from "./NewsStories";
import './List.css';

export const List = (props: ListProps) => (
    <ul>
        {props.list.stories.map((item: NewsStory) => (
            <li>
                <Item key={item.objectID} item={item} />
            </li>
        ))}
    </ul>
);

interface ListProps {
    list: NewsStories;
}

export const Item = (props: ItemProps) => (
    <li className="item">
        <span>
          <a href={props.item.url}>{props.item.title}</a>
        </span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
        <span>{props.item.points}</span>
    </li>
);

interface ItemProps {
    key: number;
    item: NewsStory;
}
