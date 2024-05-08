import React, {useRef} from 'react';
import '../styling/App.css';

function Plans ({setPlan}) {

    const fileInput = useRef(null);
    
    const dummy = event => {
        fileInput.current.click();
    }

    function getFile(event){
    
        //validation check
        if(event.target.files[0] != null){
            setPlan(URL.createObjectURL(event.target.files[0]));
        }  
    }

    return (
        <div className="column" >
            <button className="upload" onClick={dummy}> Upload Floor Plan </button>
            <input type="file" name="file" onChange={getFile} className='invisible' ref={fileInput} accept='image/png, image/gif, image/jpeg'/>            
        </div>
    );
      
}

export default Plans;