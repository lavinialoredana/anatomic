const SearchBar = () => {
    return (
        <form onSubmit={() => console.log("Hi")}>
            <input
                type="search"
                placeholder="Search for artists or albums.."
                name="search"
            />
        </form>
    );
};

export default SearchBar;
