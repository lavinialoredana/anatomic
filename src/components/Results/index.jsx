import ResultCard from "../ResultCard";
import { mockedResults } from "../../utils/mockedResults";

const Results = () => {
    return mockedResults.map((result, index) => {
        return (
            <ResultCard
                id={index}
                album={result.album}
                artist={result.artist}
                imgSrc={result.image}
                altImage={result.album}
                addToAlbums="Add To Albums"
            />
        );
    });
};

export default Results;
