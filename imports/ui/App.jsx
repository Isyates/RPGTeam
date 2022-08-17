import React from 'react';
import { JobChange } from './JobChange.jsx';
import { Info } from './Info.jsx';
import { CharList, ChooseNew} from './CharacterList.jsx';
import { CharacterForm } from './CharacterForm.jsx';
import { CharacterDetail } from './CharacterDetail.jsx';
import { useState } from 'react';

export const App = () => {
  const [charas,setCharas] = useState(null)
  return ( 
  <div class='columns'>
    
    <div class='column is-one-third'>
    <CharacterDetail charas={charas} />
    <JobChange charas={charas} setCharas={setCharas}/>
    </div>
    <div class='column'>
    <CharacterForm charas={charas} setCharas={setCharas}/>
    <br />
    <CharList charas={charas} setCharas={setCharas}/>
    </div>

    
  </div>
  )
  };
