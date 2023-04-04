import { useContext } from "react";
import "./ResultCard.css";
import { AllAlbumsContext } from "../../context/AllAlbumsProvider";

const ResultCard = ({ result, onModalShow }) => {
    const { addAlbum, removeAlbum, isAlbumSaved } = useContext(AllAlbumsContext);

    const cachedIsAlbumSaved = isAlbumSaved(result.id);

    const handleAddRemoveAlbum = (e) => {
        e.stopPropagation();
        cachedIsAlbumSaved ? removeAlbum(result) : addAlbum(result);
    };

    return (
        <div onClick={onModalShow} className="Card-container" id={result.id}>
            <article>
                <header>
                    <h5> {result.album}</h5>
                    <p> By {result.artist}</p>
                </header>
                <img src={result.cover} alt={result.album} />
                <footer>
                    <button
                        onClick={handleAddRemoveAlbum}
                        className={cachedIsAlbumSaved ? "contrast" : ""}
                    >
                        {cachedIsAlbumSaved ? "Remove Album" : "Add To Albums"}
                    </button>
                </footer>
            </article>
        </div>
    );
};

export default ResultCard;
