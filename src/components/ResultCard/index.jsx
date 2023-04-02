import { useContext } from "react";
import { AllAlbumsContext } from "../../context/AllAlbumsProvider";
import "./ResultCard.css";

const ResultCard = ({ result }) => {
    const {addAlbum, removeAlbum, isAlbumSaved } = useContext(AllAlbumsContext);

    const cachedIsAlbumSaved = isAlbumSaved(result.id);

    const handleClick = () => {
        cachedIsAlbumSaved ? removeAlbum(result) : addAlbum(result);
    };

    return (
        <div className="Card-container" id={result.id}>
            <article>
                <header>
                    <h5> {result.album}</h5>
                    <p> {result.artist}</p>
                </header>
                <img src={result.image} alt={result.image} />
                <footer>
                    <button
                        onClick={handleClick}
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
