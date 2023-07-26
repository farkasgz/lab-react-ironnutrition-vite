import { useState } from "react"
import { Input } from "antd";

function SearchBar({searchFood}) {
    let searchTerm = '';
    searchFood(searchTerm);

    return (
        <label htmlFor="searchTerm">
            Search:
            <Input name="searchTerm" type="text"/>
        </label>
    )
}

export default SearchBar;