import { useState } from "react";

const SearchBar = ({ onContentChange }) => {
    const [userInput, setUserInput] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onContentChange(encodeURIComponent(userInput));
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="search"
                placeholder="Search for artists or albums.."
                name="search"
                onChange={(e) => setUserInput(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;
