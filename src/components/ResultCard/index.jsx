import "./ResultCard.css";

const ResultCard = ({album, artist, imgSrc, altImage, addToAlbums }) => {
    return (
        <div className="Card-container">
                <article>
                <header>
                    <h5> {album}</h5>
                    <p> {artist}</p>
                </header>
                <img
                    src= {imgSrc}
                    alt={altImage}
                />
                <footer>
                    <button> {addToAlbums} </button>
                </footer>
            </article>
        </div>
    );
};

export default ResultCard;
