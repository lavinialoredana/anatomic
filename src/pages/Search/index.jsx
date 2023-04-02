import HeaderBar from "../../components/HeaderBar";
import "./Search.css";
import Results from "../../components/Results";
import { mockedResults } from "../../utils/mockedResults";

function Search() {
    return (
        <div className="Search">
            <header className="Search-header">
                <HeaderBar
                    homeSrc={"/"}
                    home={"Home"}
                    albumsSrc={"/all-albums"}
                    allAlbums={"All Albums"}
                    showSearchBar={true}
                />
            </header>

            <main>
                <div className="Results-container">
                    <Results resultsData={mockedResults} />
                </div>
            </main>
        </div>
    );
}

export default Search;
