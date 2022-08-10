import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { CharList } from './CharacterList.jsx';
import { CharacterForm } from './CharacterForm.jsx';
import { CharacterDetail } from './CharacterDetail.jsx';

export const App = () => (
  <div>
    <CharacterDetail/>
    <h1>Welcome to Meteor!</h1>
    <CharacterForm/>
    {/* <Hello/> */}
    {/* <Info/> */}
    <CharList/>
    
  </div>
);
