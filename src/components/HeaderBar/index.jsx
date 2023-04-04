import "./HeaderBar.css";
import SearchBar from "../SearchBar";
import { Link, useLocation } from "react-router-dom";
import { homeSrc, albumsSrc } from "../../routes/AppRouter";

const HeaderBar = ({ showSearchBar, onContentChange }) => {
    const location = useLocation().pathname;

    return (
        <div className="Top-navigation-container">
            <nav className="Top-navigation">
                <ul>
                    <li>
                        <Link
                            to={homeSrc}
                            className={
                                location === homeSrc
                                    ? "Top-navigation-highlight-link contrast"
                                    : null
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={albumsSrc}
                            className={
                                location === albumsSrc
                                    ? "Top-navigation-highlight-link contrast"
                                    : null
                            }
                        >
                            All Albums
                        </Link>
                    </li>
                </ul>
            </nav>
            {showSearchBar ? <SearchBar onContentChange={onContentChange} /> : null}
        </div>
    );
};
export default HeaderBar;
