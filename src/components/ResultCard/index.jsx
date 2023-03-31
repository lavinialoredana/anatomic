import "./ResultCard.css";

const ResultCard = ({ 
    id,
    album, 
    artist, 
    imgSrc, 
    altImage, 
    onClick, 
    addToAlbums 
}) => {
    return (
        <div className="Card-container" id = {id}>
            <article>
                <header>
                    <h5> {album}</h5>
                    <p> {artist}</p>
                </header>
                <img src={imgSrc} alt={altImage} />
                <footer>
                    <button onClick={()=> onClick(id)}> {addToAlbums} </button>
                </footer>
            </article>
        </div>
    );
};

export default ResultCard;
