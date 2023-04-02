import "./HeaderBar.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const HeaderBar = ({ homeSrc, home, albumsSrc, allAlbums, showSearchBar }) => {
    return (
        <div className="Top-navigation-container">
            <nav className="Top-navigation">
                <ul>
                    <li>
                        <Link to={homeSrc}>
                            <strong>{home}</strong>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={albumsSrc}>{allAlbums}</Link>
                    </li>
                </ul>
            </nav>
            {showSearchBar ? <SearchBar /> : null}
        </div>
    );
};
export default HeaderBar;
