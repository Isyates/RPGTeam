import React, { useState } from 'react';
import { useTracker, useFind } from 'meteor/react-meteor-data';
import { CharacterCollection } from '../api/CharacterData';
import { CharacterDetail } from './CharacterDetail';
import {LinksCollection} from '../api/links'



export const JobChange = ({charas,setCharas}) =>{
    
    console.log(charas)

    const useTracker = event => {
        CharacterCollection.update ({_id:charas._id}, 
            {$set:{
            job:'Ninja',
            jobClassImg: 'http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Ninja/Ninja1M-SW.gif',
            jobProfileImg:'http://www.videogamesprites.net/FinalFantasyTactics/Jobs/Ninja/Ninja1M.gif'},
            }
            )
    }

   
if (!charas) {
    return(
        <div>Select a Character to Job Change</div>
    )
}else{
    
return (
    
     
    
    <div>
<label for="membership">Change Job</label>
<select name="membership" >
  <option value="Squire">Squire</option>
  <option value="Chemist">Chemist</option>
  <option value="Black Mage">Black Mage</option>
  <option value="White Mage">White Mage</option>
</select>
    <input name='membership'type='submit' value='submit' onClick={() => useTracker(charas)}/>
</div>
)
}
    
}