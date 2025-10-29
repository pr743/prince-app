import React, {useState} from 'react'


function LocationSelector(){
    const [Location, setLocation] = useState("");

    const handleChange = (e) =>{
        setLocation(e.target.value);
    }

   return (
    <div className="d-flex align-items-center gap-3">
    <span className="text-white fw-semibold">Deliver to:</span>

    <input type="text"  value={Location} onChange={handleChange} placeholder="Enter your location" 
      className="form-control"  style={{width:"200px" , height:"35px" , borderRadius:"6px",padding:"0 10px"}}/>

      
    </div>
  )
}

export default LocationSelector
