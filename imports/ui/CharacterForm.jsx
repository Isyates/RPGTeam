import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';

const jobOptions = ['Squire','Chemist','Monk','Thief','Time Mage',
'Mystic','Samurai','Ninja','Arithmetician','Dancer',
'Bard','Mime','Knight','Archer','Black Mage','White Mage',
'Geomancer','Dragoon','Summoner','Orator','Onion Knight','Dark Knight']


export const CharacterForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    jobNumber = Math.floor(Math.random() * 22)
    jobString  = jobOptions[jobNumber]
    jobStringShort = jobString.replace(' ', '')
    CharacterCollection.insert({
      name: text.trim(),
      job: jobString,
      jobProfileImg: `http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${jobStringShort}/${jobStringShort}1M.gif`,
      jobClassImg: `http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${jobStringShort}/${jobStringShort}1M-SW.gif`

    });

    setText("");
  };
 
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type the name of the recruited character"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Recruit</button>
    </form>
  );
};