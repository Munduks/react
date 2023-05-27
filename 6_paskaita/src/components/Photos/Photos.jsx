import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 10; // Add checking if posts exists

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        // Kai yra atnaujinamas state, kodas rerenderinas ir nuskaitomas iš naujo
        setPhotos(response);
      })
      .catch((error) => console.error(error));
    // useEffect hooksas, be dependency array kviečiamas kiekvieną render ciklą
    // useEffect hooksas, su tuščiu dependency array yra paleidžiamas tik vieną kartą
  }, []);

  // console.log(photos.length > 1 ? photos[0].title : "");

  return (
    <div className="photos">
      {/* <Photos  title="Test" />  */}
      {photosExists && (
        <>
          <Photo url={photos[0].url} title={photos[0].title} />
          <Photo url={photos[3].url} title={photos[3].title} />
          {/* <Photo imageUrl={photos[1].imageUrl} title={photos[1].title} /> */}
        </>
      )}
    </div>
  );
};

export default Photos;