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
  <footer class="footer" id='footer'>
  <div class="content has-text-centered">
    <p>
      <strong>RPG Team</strong> a project created by <strong>Isiah Yates </strong> as a study on the use of new technologies.

    </p>
  </div>
</footer>
  </div>
  
  )
  };
