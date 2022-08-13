import React, { useState } from 'react';
import { CharacterCollection } from '../api/CharacterData';
import { useTracker } from 'meteor/react-meteor-data';



export const CharacterDetail = ({charas}) =>{

    console.log({charas})

    
return (
    charas && (<div>
        
        <h1>This is {charas.name}</h1>
       <h2>Their Job is {charas.job}</h2>
       <img src={charas.jobProfileImg} width='9%' alt={charas.job} image />
       <img src={charas.jobClassImg} alt={charas.job} image />
       </div>
   )


)

}
