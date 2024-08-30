// src/App.js
import React, { useState, useEffect } from 'react';
import ArtGenerator from './Components/ArtGenerator';
import ArtGallery from './Components/ArtGallery';
import { auth, signInWithGoogle, logout } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css'; // Add styles here

const App = () => {
  const [artPieces, setArtPieces] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const addArt = (newArt) => {
    setArtPieces([newArt, ...artPieces]);
  };

  const updateArt = (id, updates) => {
    setArtPieces(artPieces.map(art => art.id === id ? { ...art, ...updates } : art));
  };

  return (
    <div className="App">
      <h1>AI-Generated Art Showroom</h1>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <ArtGenerator addArt={addArt} />
          <ArtGallery artPieces={artPieces} updateArt={updateArt} />
        </>
      ) : (
        <button onClick={signInWithGoogle}>Login with Google</button>
      )}
    </div>
  );
};

export default App;
