import HeaderBar from "../../components/HeaderBar";
import "./App.css";
import Results from "../../components/Results";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderBar />
            </header>

            <main>
            < div className = "Results-container">
                <Results />
                </div>
            </main>
        </div>
    );
}

export default App;
