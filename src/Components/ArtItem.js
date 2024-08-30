// src/components/ArtItem.js
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ArtItem = ({ art, updateArt }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(art.rating || 0); // Initialize rating with existing value or 0

  const handleLike = () => {
    updateArt(art.id, { likes: art.likes + 1 });
  };

  const addComment = () => {
    if (comment.trim() === '') return;
    updateArt(art.id, { comments: [...art.comments, comment] });
    setComment('');
  };

  const handleRating = (newRating) => {
    setRating(newRating); // Update local rating state
    updateArt(art.id, { rating: newRating }); // Update the rating in the art piece
  };

  return (
    <div className="art-item">
      <img src={art.imageUrl} alt={art.title} />
      <h3>{art.title}</h3>
      <div className="interactions">
        <button onClick={handleLike}>
          <FaHeart /> {art.likes}
        </button>
        <div className="rating">
          <p>Rating: {rating} / 5</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => handleRating(star)}>
              {star} ⭐
            </button>
          ))}
        </div>
        <div className="comments">
          {art.comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={addComment}>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default ArtItem;

