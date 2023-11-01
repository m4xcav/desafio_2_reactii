import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import IconHeart from "./IconHeart";
const Gallery = ({ fav }) => {
  const { api, setApi } = useContext(ThemeContext);

  const addFavorite = (photoId) => {
    setApi(prevApi => ({
      ...prevApi,
      photos: prevApi.photos.map(photo => {
        if (photo.id === photoId) {
          return {
            ...photo,
            liked: !photo.liked
          };
        }
        return photo;
      })
    }));
  };
  if (api.length === 0) {
    return <p>Cargando...</p>; // Verificando que api no este vacio
  }
  let filteredApi = api.photos;
  if (fav) {
    filteredApi = api.photos.filter(photo => photo.liked);
  }
  return (
    <div className="gallery grid-columns-5 p-3">
      {filteredApi.map(photo => (
        <div
         onClick={()=>addFavorite(photo.id)}
         key={photo.id} className="photo" style={{backgroundImage :`url(${photo.src.tiny})` }}>
          <IconHeart filled={photo.liked}></IconHeart>
          <p>{photo.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
