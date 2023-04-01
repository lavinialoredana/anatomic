import { createContext, useState } from "react";


export const AllAlbumsContext = createContext();

const AllAlbumsProvider = (props) => {
        const [allAlbums, setAlbums] = useState([]);

        const addAlbum = (selectedAlbum) => {
                setAlbums([...allAlbums, selectedAlbum]);
            };

        const removeAlbum = (selectedAlbum) => {
             const remainingAlbums = allAlbums.filter((album)=> album.id !== selectedAlbum.id);
              setAlbums(remainingAlbums)
        }  
        
        const isAlbumSaved = (id) => {
              const albumIndex = allAlbums.findIndex((album) => album.id === id);
              return albumIndex!== -1 
        }

        return(
                <AllAlbumsContext.Provider value={{allAlbums, addAlbum,removeAlbum, isAlbumSaved}}>
                        {props.children}
                </AllAlbumsContext.Provider>
        );
};

export default AllAlbumsProvider;