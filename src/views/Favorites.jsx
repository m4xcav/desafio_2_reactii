import Gallery from "../components/Gallery";
const Favorites = ({ fav }) => {
  return (
    <div className="app">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Gallery fav={true} />
      </div>
    </div>
  );
};
export default Favorites;