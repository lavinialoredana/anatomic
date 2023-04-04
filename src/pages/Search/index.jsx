import HeaderBar from "../../components/HeaderBar";
import "./Search.css";
import Results from "../../components/Results";
import { useEffect, useState, useCallback } from "react";
import Pagination from "../../components/Pagination";

const Search = () => {
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const resultsPerPage = 4;

    const token = "AtHIrqqzwzCDJWPlBSWeYmEVCyTYiGWQSLRnplqH";

    const handlePaginate = (number) => {
        setCurrentPage(number);
    };

    const handlePreviousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage !== Math.ceil(totalResults / resultsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleContentChange = (userInput) => {
        setCurrentPage(1);
        setUserInput(userInput);
    };

    const fetchContent = useCallback(async () => {
        if (userInput === "") {
            return;
        }

        setSearchResults([]);
        setIsLoading(true);

        try {
            const response = await fetch(
                `https://api.discogs.com/database/search?artist=${userInput}&per_page=${resultsPerPage}&page=${currentPage}`,
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
                    id: result.id,
                    masterId: result.master_id,
                    country: result.country,
                    genre: result.genre,
                    year: result.year,
                };
            });
            setSearchResults(resultsArray);

            setTotalResults(data.pagination.items);

            console.log("data", data);
        } catch (error) {
            console.log("Error");
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    }, [userInput, resultsPerPage, currentPage]);

    useEffect(() => {
        fetchContent();
    }, [userInput, currentPage, fetchContent]);

    return (
        <div className="Search">
            <header className="Search-header">
                <HeaderBar showSearchBar={true} onContentChange={handleContentChange} />
            </header>

            {isLoading ? (
                <div className="Loading">Loading...</div>
            ) : searchResults.length > 0 ? (
                <main className="Main-container">
                    <div className="Results-container grid">
                        <Results resultsData={searchResults} />
                    </div>
                    <Pagination
                        onPreviousPage={handlePreviousPage}
                        currentPage={currentPage}
                        onPaginate={handlePaginate}
                        onNextPage={handleNextPage}
                    />
                </main>
            ) : null}
        </div>
    );
};

export default Search;
