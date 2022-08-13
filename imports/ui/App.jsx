import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { CharList, ChooseNew} from './CharacterList.jsx';
import { CharacterForm } from './CharacterForm.jsx';
import { CharacterDetail } from './CharacterDetail.jsx';
import { useState } from 'react';

export const App = () => {
  const [charas,setCharas] = useState(null)
  return ( 
  <div>
    <CharacterDetail charas={charas} />
    <h1>Welcome to Meteor!</h1>
    <CharacterForm/>
    {/* <Hello/> */}
    <CharList charas={charas} setCharas={setCharas}/>

    
  </div>
  )
  };
