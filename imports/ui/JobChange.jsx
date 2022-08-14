import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterCollection';




export const JobChange = ({charas,setCharas}) =>{
    

    const useTracker = (value) => {
        let newJob = jobValue.value
        let newjobTrim = newJob.replace(' ', '')
        console.log(newjobTrim)
        console.log(newJob)

        CharacterCollection.update ({_id:charas._id}, 
            {$set:{
            job:newJob,
            jobClassImg: `http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${newjobTrim}/${newjobTrim}1M-SW.gif`,
            jobProfileImg:`http://www.videogamesprites.net/FinalFantasyTactics/Jobs/${newjobTrim}/${newjobTrim}1M.gif`,
            }}
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
<select name="membership" id='jobValue' defaultValue='Chemist' >
  <option value="Squire" >Squire</option>
  <option value="Chemist">Chemist</option>
  <option value="Black Mage">Black Mage</option>
  <option value="White Mage">White Mage</option>
</select>
    <input name='membership' type='submit' value='submit' defaultValue='Squire' onClick={() => useTracker(charas)}/>
</div>
)
}
    
}