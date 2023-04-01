import "./HeaderBar.css";
import SearchBar from "../SearchBar";

const HeaderBar = ({ home, src, allAlbums, showSearchBar}) => {
    return (
        <div className="Top-navigation-container">
            <nav className="Top-navigation">
                <ul>
                    <li>
                        <strong>{home}</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href={src}>{allAlbums}</a>
                    </li>
                </ul>
            </nav>
            {showSearchBar ? <SearchBar /> : null }
        </div>
    );
};
export default HeaderBar;
