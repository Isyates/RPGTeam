import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';

export const CharacterDetail = () => {
    const [text, setText] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
  
  
      CharacterCollection.findOne({_id:text});
  
      setText("");
    };
   
    return (
        <button onClick={setText} type="submit">Character Detail</button>
    );
  };