import React from 'react';
import './App.css';
import PhotosGallery from './Components/PhotosGallery';

function App() {

  const photos = [
    "http://fpoimg.com/140x60?text=Teste1&bg_color=2e61e5",
    "http://fpoimg.com/140x60?text=Teste2&bg_color=2e61e5",
    "http://fpoimg.com/140x60?text=Teste3&bg_color=2e61e5",
    "http://fpoimg.com/140x60?text=Teste4&bg_color=2e61e5"
  ]

  return (
    <div className="App">
      <h1>Galeria de fotos</h1>
      <PhotosGallery
        photos={photos}
      />
    </div>
  );
}

export default App;
