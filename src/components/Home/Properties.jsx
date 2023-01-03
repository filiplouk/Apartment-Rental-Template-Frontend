import React, {useState, useEffect} from "react";
import PropertyCard from "./PropertyCard";


function Properties(){
  const [houses, setHouses]= useState({});
  useEffect(()=> {
   fetch("/properties")
   .then(response => response.json())
   .then(data => setHouses(data))
  },[])
  return (
    <div>
     {(typeof houses.properties==="undefined")?(
      <div class="spinner-grow" role="status">
         <span class="visually-hidden">Loading...</span>
      </div>)
    :(houses.properties.map((value,key)=>{
      let source = "./images/"+value._id+".jpg";
      return(
        <div className="properties">
          <div className="row property">
            <div className="col-4  property-image">
              <img key={key} src={source}/>
            </div>
            <div className="col-8  property-card">
              <PropertyCard name={value.name} units={value.units} key={key}/>
            </div>
          </div>
        </div>
        
      )
     }))}
    </div>
  )
}

















export default Properties