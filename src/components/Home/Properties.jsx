import React, {useState, useEffect} from "react";
import PropertyCard from "./PropertyCard";


function Properties(){
  const [houses, setHouses]= useState({});
  useEffect(()=> {
   fetch("/properties", {
    method: 'GET',
    headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json'
    }
    })
   .then(response => response.json())
   .then(data => setHouses(data))
   .catch(err => console.log(err))
  },[])
  return (
    <div>
     {(typeof houses.properties==="undefined")?(
      <div class="spinner-grow" role="status">
         <span class="visually-hidden">Loading...</span>
      </div>)
    :(houses.properties.map((value,key)=>{
      let source = process.env.PUBLIC_URL+"/images/"+value._id+".jpg";
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