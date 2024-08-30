// src/components/ArtGallery.js
import React from 'react';
import ArtItem from './ArtItem';

const ArtGallery = ({ artPieces, updateArt }) => {
  return (
    <div className="art-gallery">
      <h2>Art Gallery</h2>
      <div className="gallery-grid">
        {artPieces.map((art) => (
          <ArtItem key={art.id} art={art} updateArt={updateArt} />
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
