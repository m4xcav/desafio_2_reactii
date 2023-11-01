import Gallery from "../components/Gallery";
const Favorites = ({ fav }) => {
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
        <Gallery fav={true} />
    </div>
  );
};
export default Favorites;