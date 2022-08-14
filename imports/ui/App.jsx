import React from 'react';
import { JobChange } from './JobChange.jsx';
import { CharList } from './CharacterList.jsx';
import { CharacterForm } from './CharacterForm.jsx';
import { CharacterDetail } from './CharacterDetail.jsx';
import { useState } from 'react';

export const App = () => {
  const [charas,setCharas] = useState(null)
  return ( 
  <div>
    <JobChange charas={charas} setCharas={setCharas}/>
    <CharacterDetail charas={charas} />
    <CharacterForm charas={charas} setCharas={setCharas}/>
    <CharList charas={charas} setCharas={setCharas}/>

    
  </div>
  )
  };
