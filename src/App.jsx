import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { ThemeContext } from "./context/ThemeContext";

const PHOTO_URL = "/photos.json";

const App = () => {
  const { api, setApi } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PHOTO_URL);
        if (response.ok) {
          const data = await response.json();
          setApi(data);//agregando el array al setApi
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home photos={api} />} />
        <Route path="/favoritos" element={<Favorites photos={api} />} />
      </Routes>
    </div>
  );
};

export default App;
