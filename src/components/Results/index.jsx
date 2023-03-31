import ResultCard from "../ResultCard";


const Results = ({resultsData, onClick}) => {
        
    return resultsData.map((result, index) => {

        return (
            <ResultCard
                key={index}
                id={result.id}
                album={result.album}
                artist={result.artist}
                imgSrc={result.image}
                altImage={result.album}
                onClick={onClick}
                addToAlbums="Add To Albums"
            />
        );
    });
};

export default Results;
