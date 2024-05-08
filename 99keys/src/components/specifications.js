import React, {useState}  from 'react';
import '../styling/specifications.css';

function Specs (){

    //north is set to default
    const [data, setData] = useState({

        name: "",
        sizeIn: "",
        sizeExt: "",   
        extType: "",
        direction: "North",
        floorType: ""

    });

    //pass the relevant function and event to be updated
    function handleChange(event) {
        const newdata = {...data};
        newdata[event.target.id] = event.target.value;
        console.log(event.target.label);
        
        setData(newdata);
    }

    function handleSubmit(){
        alert(
            'Normally this data would be sent to backend but for now here it is:' +
            '\nFloor Name: ' + data.name + 
            '\nInterior Size: ' + data.sizeIn + 
            '\nExterior Size: ' + data.sizeExt +
            '\nExterior Type: ' + data.extType +
            '\nFacing Direction: ' + data.direction +
            '\nFloor Type: ' + data.floorType
        )
    }

    return(
        <div className='Input'>
            <form>
                <label>Floor Name</label>
                <input
                    type="text"
                    required
                    id = 'name'
                    onChange = {(e) => handleChange(e)}
                    //value = {data.name}
                />
                
                <label> Interior Size </label>
                <input  
                    type="number"
                    id = 'sizeIn'
                    required
                    onChange = {(e) => handleChange(e)}
                    //value = {data.sizeIn}
                />
                
                <label> Exterior Size </label>
                <input  
                    type="number"
                    id = 'sizeExt'
                    required
                    onChange = {(e) => handleChange(e)}
                    //value = {data.sizeExt}
                />

                <label> Exterior Type </label>
                <input  
                    type="text"
                    id = 'extType'
                    required
                    onChange = {(e) => handleChange(e)}
                    //value = {data.extType}
                />

                <label> Facing Direction</label>
                <select onChange = {(e) => handleChange(e)} id='direction'>
                    
                    <option value='North'> North </option>
                    <option value='East'> East </option>
                    <option value='South'> South </option>
                    <option value='West'> West </option>
                </select>

                <label> Floor Type</label>
                <select onChange = {(e) => handleChange(e)} id='floorType'>
                    <option value='Studio'> </option>
                    <option value='1 Bed 1 Bath'> 1 Bed 1 Bath </option>
                    <option value='2 Bed 1 Bath'> 2 Bed 1 Bath</option>
                    <option value='3 Bed 1 Bath'> 3 Bed 1 Bath</option>
                </select> 
            </form>

            <button onClick={handleSubmit}>
                Save
            </button>

        </div>
    );
}

export default Specs;