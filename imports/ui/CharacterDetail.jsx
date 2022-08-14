import React, { useState } from 'react';




export const CharacterDetail = ({charas}) =>{


    
return (
    
    charas && (<div>


        
        <h1>This is {charas.name}</h1>
       <h2>Their Job is {charas.job}</h2>
       <img src={charas.jobProfileImg} width='5%' alt={charas.job} image />
       <img src={charas.jobClassImg} alt={charas.job} image />
       

       </div>
   )




)

}
