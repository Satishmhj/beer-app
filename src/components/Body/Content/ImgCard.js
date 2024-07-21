import React, { useState } from 'react';

const ImgCard = ({ image, altText = 'Card image cap' }) => {
  const [src, setSrc] = useState(image);
  const dummyImage = 'https://editablegifs.com/gifs/gifs/beer-gif-5/thumbnail.gif'; // Replace with your dummy image path

  const handleError = () => {
    setSrc(dummyImage);
  };

  return (
    <img
      className="card-img-top"
      src={src}
      alt={altText}
      onError={handleError}
    />
  );
};

export default ImgCard;
