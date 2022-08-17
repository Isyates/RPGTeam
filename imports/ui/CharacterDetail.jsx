import React, { useState } from 'react';




export const CharacterDetail = ({charas}) =>{

  const deleteCharacter = ({ _id }) => CharacterCollection.remove(_id)
    
return (
    
    charas && (<div>


<div class="card" id='detailCard' >

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-96x96">
        <img src={charas.jobProfileImg}  alt={charas.job} image />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-3">{charas.name}</p>

        <figure>
        
        <img src={charas.jobClassImg} alt={charas.job} image />
        <p class="subtitle is-6">{charas.job}</p>
        
        </figure>
      </div>
      
    </div>

    <div class="content">
      <br></br>
      <button class="button is-dark is-medium is-fullwidth" onClick= {() => deleteCharacter(charas)}>Delete</button>
    </div>
    
  </div>
</div>
<br />
       </div>
   )





)

}
