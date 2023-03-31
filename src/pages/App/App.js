import HeaderBar from "../../components/HeaderBar";
import "./App.css";
import ResultCard from "../../components/ResultCard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <HeaderBar />
            </header>

            <main>
                <ResultCard />
            </main>
        </div>
    );
}

export default App;
