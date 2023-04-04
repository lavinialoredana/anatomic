import "./Modal.css";

const ModalCard = ({ isModalOpen, modalResult, onModalClose }) => {
    if (isModalOpen === false) {
        return null;
    }
    return (
        <div className="Modal-card-container">
            <dialog open>
                <article>
                    <header>
                        <h5>{modalResult.album}</h5>
                        <p>{modalResult.artist}</p>
                    </header>
                    <img src={modalResult.cover} alt={modalResult.album}></img>
                    <ul>
                        <li>{modalResult.country}</li>
                        <li>{modalResult.genre}</li>
                        <li>{modalResult.year}</li>
                    </ul>
                    <button onClick={onModalClose}> Close X </button>
                </article>
            </dialog>
        </div>
    );
};

export default ModalCard;
