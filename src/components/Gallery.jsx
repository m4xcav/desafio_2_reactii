import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import IconHeart from "./IconHeart";
const Gallery = ({ fav }) => {
  const { api } = useContext(ThemeContext);
  console.log("este es el api en GAllery:   ")
  console.log(api)
  if (api.length === 0) {
    return <p>Cargando...</p>; // Verificando que api no este vacio
  }
  let filteredApi = api.photos;
  if (fav) {
    filteredApi = api.photos.filter(photo => photo.liked);
  }
  console.log("este es el api filtrado:   ")
console.log(filteredApi);
console.log("y el fav es:   ")
console.log(fav)
  return (
    <div className="gallery grid-columns-5 p-3">
      {filteredApi.map(photo => (
        <div key={photo.id} className="photo" style={{backgroundImage :`url(${photo.src.tiny})` }}>
          <IconHeart fill={photo.liked}></IconHeart>
          <p>{photo.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
