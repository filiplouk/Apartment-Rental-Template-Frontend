import React from "react";

function PropertyCard(props){
  let rooms = props.units;
  const roomsNumber =[0,0,0,0];
  let commonRooms = ["kitchen", "bathroom", "bedroom", "living-room"];
  rooms.forEach(element =>{
    if (element==="kitchen"){
       roomsNumber[0]+=1;
    }
    else if (element==="bathroom"){
        roomsNumber[1]+=1;
    }
    else if (element==="bedroom"){
        roomsNumber[2]+=1;
     }
    else if (element==="living-room"){
        roomsNumber[3]+=1;
     }
     
  })
  return(
    <div >
        <h2 className="property-card__heading">{props.name}</h2>
        <div className="property-card__details row">
           {commonRooms.map((value,key)=>{
                if (roomsNumber[key]!==0){
                    return(
                        <div className="col-md-12 col-6">                      
                          <p key={key}>{roomsNumber[key]} {value}</p>
                        </div>
                      )
                }

           })}
        </div>
        <div className="property-card__price">
           <h3 >$400<span className="price-month"> /month</span></h3>
        </div>
        
    </div>
  )
}

export default PropertyCard;