import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterCollection';

const jobOptions = ['Squire','Chemist','Monk','Thief','Time Mage',
'Mystic','Samurai','Ninja','Arithmetician',
'Mime','Knight','Archer','Black Mage','White Mage',
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
    <div>
    <form className="task-form" onSubmit={handleSubmit}>
      <input class="input is-normal $input-color $grey-darker"
        type="text"
        placeholder="Type the name of the recruited character"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button class="button is-dark is-fullwidth"type="submit">Recruit</button>
    </form>
    </div>
  );
};