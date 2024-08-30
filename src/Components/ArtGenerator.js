// src/components/ArtGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

const ArtGenerator = ({ addArt }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateArt = async () => {
    if (input.trim() === '') return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations', // Endpoint to generate images
        {
          prompt: input,
          n: 1,
          size: '1024x1024',
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use environment variable
            'Content-Type': 'application/json',
          },
        }
      );

      const imageUrl = response.data.data[0]?.url;
      if (!imageUrl) throw new Error('No image URL found in the response');

      const newArt = {
        id: Date.now(),
        title: `Art inspired by: ${input}`,
        imageUrl: imageUrl,
        likes: 0,
        comments: [],
      };

      addArt(newArt);
    } catch (err) {
      console.error('Error generating art:', err.response ? err.response.data : err.message);
      setError('Error generating art. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="art-generator">
      <h2>Generate Your Art</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a theme or keywords"
      />
      <button onClick={generateArt} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Art'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default ArtGenerator;
