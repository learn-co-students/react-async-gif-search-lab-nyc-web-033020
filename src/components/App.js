import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";

// the App component should render out the GifListContainer component
const baseUrl = "https://api.giphy.com/v1/gifs/search?q=";
const apiKey = `&api_key=${process.env.REACT_APP_API_KEY}&rating=g`;

const App = () => {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
};

export default App;
