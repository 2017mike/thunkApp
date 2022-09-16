import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  console.log(photos);
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
        laboriosam esse. Repudiandae vel eligendi odit neque ad? Animi esse
        debitis iusto, quasi nobis consequatur illum doloribus quos iure
        molestiae pariatur?
      </p>
      <div className="gallery">
        {photos.map((photo) => (
          <img
            key={photo.id}
            alt={photo.author}
            src={photo.download_url}
            width="400"
            height="400"
          />
        ))}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
