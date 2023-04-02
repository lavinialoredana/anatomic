import ResultCard from "../ResultCard";

const Results = ({ resultsData }) => {
    return resultsData.map((result) => {
        return (
            <ResultCard
                key={result.id}
                result = {result}
            />
        );
    });
};

export default Results;
