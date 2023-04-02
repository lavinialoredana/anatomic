import HeaderBar from "../../components/HeaderBar";
import "./Search.css";
import Results from "../../components/Results";
import { mockedResults } from "../../utils/mockedResults";
import { useState } from "react";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);

    const token = "AtHIrqqzwzCDJWPlBSWeYmEVCyTYiGWQSLRnplqH";

    const handleContentChange = async (userInput) => {
        setSearchResults([]);

        try {
            const response = await fetch(
                `https://api.discogs.com/database/search?artist=${userInput}&per_page=5&page=1`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Discogs token=${token}`,
                    },
                }
            );

            if (response.status !== 200) {
                console.log("Wrong response");
                return;
            }

            const data = await response.json();

            const resultsArray = data.results.map((result) => {
                const splitTitle = result.title.split(" - ");
                return {
                    album: splitTitle[1],
                    artist: splitTitle[0],
                    cover: result.thumb,
                    masterId: result.master_id,
                    id: result.id,
                };
            });
            setSearchResults(resultsArray);

            console.log("data", data);
        } catch (error) {
            console.log("Error");
            throw new Error(error);
        } finally {
        }
    };

    return (
        <div className="Search">
            <header className="Search-header">
                <HeaderBar showSearchBar={true} onContentChange={handleContentChange} />
            </header>

            <main>
                <div className="Results-container">
                    <Results resultsData={searchResults} />
                </div>
            </main>
        </div>
    );
};

export default Search;
