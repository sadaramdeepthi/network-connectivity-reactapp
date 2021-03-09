import React from "react";
import "./App.css";
import images from "./images/images";
import NetworkDetector from "./components/NetworkDetector";

function App() {
  const renderImage = () => {
    return (
      <div className="image-list">
        {images.map((data) => (
          <img src={data.image} alt="random" key={data.id} className="image" />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <p className="page-title">The Image Gallery</p>
      {renderImage()}
    </div>
  );
}

export default NetworkDetector(App);
