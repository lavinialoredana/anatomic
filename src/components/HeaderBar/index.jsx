import "./HeaderBar.css";
import SearchBar from "../SearchBar";

const HeaderBar = ({home,allAlbums}) => {
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
                        <a href="/all-albums">{allAlbums}</a>
                    </li>
                </ul>
            </nav>

          <SearchBar/>
        </div>
    );
};
export default HeaderBar;
