import "./Pagination.css";

const Pagination = ({ onPreviousPage, currentPage, onPaginate, onNextPage }) => {
    return (
        <div className="Pagination-container">
            <ul className="Pagination">
                <li onClick={onPreviousPage}>Prev</li>
                <li className="Pagination-number">{currentPage}</li>
                <li onClick={onNextPage} className="Pagination-number">
                    Next
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
