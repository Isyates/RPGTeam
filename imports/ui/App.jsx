import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { CharList } from './CharacterList.jsx';
import { CharacterForm } from './CharacterForm.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <CharacterForm/>
    {/* <Hello/> */}
    {/* <Info/> */}
    <CharList/>
  </div>
);
