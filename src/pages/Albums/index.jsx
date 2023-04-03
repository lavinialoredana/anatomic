import { useContext } from "react";
import { AllAlbumsContext } from "../../context/AllAlbumsProvider";
import HeaderBar from "../../components/HeaderBar";
import Results from "../../components/Results";
import "./Albums.css";

const Albums = () => {
    const { allAlbums } = useContext(AllAlbumsContext);

    return (
        <div className="Albums-container grid">
            <HeaderBar showSearchBar={false} />
            <Results resultsData={allAlbums} />
        </div>
    );
};

export default Albums;
