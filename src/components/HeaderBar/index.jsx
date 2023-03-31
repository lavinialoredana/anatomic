import "./HeaderBar.css";

const HeaderBar = () => {
    return (
        <div className="Top-navigation-container">
            <nav className="Top-navigation">
                <ul>
                    <li>
                        <strong>Home</strong>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/all-albums">All Albums</a>
                    </li>
                </ul>
            </nav>

            <form onSubmit={()=> console.log("Hi")}>
                <input
                    type="search"
                    placeholder="Search for artists or albums.."
                    name="search"
                />
            </form>
        </div>
    );
};
export default HeaderBar;
