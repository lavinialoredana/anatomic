import { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import "./App.css";
import Results from "../../components/Results";
import { mockedResults } from "../../utils/mockedResults";

function App() {
    const [allAlbums, setAlbums] = useState("");

    const updateAlbums = (id) => {
        const selectedAlbum = mockedResults.filter((element) => element.id === id);
        setAlbums([...allAlbums, ...selectedAlbum]);
    };
    console.log("albums", allAlbums);

    return (
        <div className="App">
            <header className="App-header">
                <HeaderBar />
            </header>

            <main>
                <div className="Results-container">
                    <Results resultsData={mockedResults} onClick={updateAlbums} />
                </div>
            </main>
        </div>
    );
}

export default App;
