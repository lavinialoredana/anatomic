import { useContext } from "react";
import { AllAlbumsContext } from "../../context/AllAlbumsProvider";
import HeaderBar from "../../components/HeaderBar";
import Results from "../../components/Results";

const Albums = () => {
    const { allAlbums } = useContext(AllAlbumsContext);

    return (
        <div>
            <HeaderBar showSearchBar={false} />
            <Results resultsData={allAlbums} />
        </div>
    );
};

export default Albums;
