import { useState } from "react";
import ResultCard from "../ResultCard";
import ModalCard from "../ModalCard";

const Results = ({ resultsData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalResult, setModalResult] = useState({});

    const handleModalShow = (result) => {
        setModalOpen(true);
        setModalResult(result);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <>
            {resultsData.map((result) => {
                return (
                    <ResultCard
                        key={result.id}
                        result={result}
                        onModalShow={() => handleModalShow(result)}
                    />
                );
            })}

            <ModalCard
                key="modalId"
                isModalOpen={modalOpen}
                onModalClose={handleModalClose}
                modalResult={modalResult}
            />
        </>
    );
};

export default Results;
