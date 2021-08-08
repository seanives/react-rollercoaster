import * as React from 'react';
import {ChangeEventHandler} from "react";

const Search = (props: SearchProps) => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value={props.search} onChange={props.onSearch} />
    </div>
);

interface SearchProps {
    search: string;
    onSearch: ChangeEventHandler,
}

export default Search;