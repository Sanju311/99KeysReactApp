import React, {useState} from 'react';


function Plans ({setPlan}) {


    function getFile(event){
    
        //validation check
        if(event.target.files[0] != null){
            setPlan(URL.createObjectURL(event.target.files[0]));
        }  

    }

    return (

        <div>
            <input type="file" name = "file" onChange={getFile}/>            
        </div>

    );
      
}

export default Plans;