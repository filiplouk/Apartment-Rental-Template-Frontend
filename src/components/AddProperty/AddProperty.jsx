import React ,{useState} from 'react';
import Header from "../partials/Header";
import RoomsNumber from './RoomsNumber';


function AddProperty() {
  const [property,setProperty] = useState({
    name:"",
    units:[]
  });
  const [message,setMessage] = useState('');

  function setName(event){
    let name = event.target.value;
    setProperty((prev)=>{
      return( {
        ...prev,
        name:name})
      }
    )
  }

  function setRoom(event){
    let number = Number(event.target.value);
    let room = event.target.name;
    let newRoom = [];
    for (let i=0; i<number;i++){
      newRoom.push(room);
    }
    setProperty((prev)=>{
      let clearUnits = prev.units;
      clearUnits = clearUnits.filter(value=>value!==room);
      return({
        ...prev,
        units:[...clearUnits,...newRoom]
      })
    })
   
   
    
  }
  function PostProperty(){
    
    fetch('https://gifted-fly-purse.cyclic.app/properties', {
      method: 'POST',
      body: JSON.stringify(property),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.text())
    .then((data) => {
       setMessage(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
  }
  return (
    <div>
      <Header />
      <form className='add-property'>
        <div class="form-group ">
          <h2 className='add-property-heading '>Add a new property</h2>

          <div className='add-property-name'>
             <label for="property_name">Property Name</label>
             <input required class="form-control form-control-lg" id="property_name" type="text" onChange={setName}  />
          </div>

          <div className='add-property-rooms'>
              <RoomsNumber room="Kitchens" name="kitchen" selectOption={setRoom}/>
          </div>
          <div className='add-property-rooms'>
              <RoomsNumber room="Bathrooms" name="bathroom" selectOption={setRoom}/>
          </div>
          <div className='add-property-rooms'>
              <RoomsNumber room="Bedrooms" name="bedroom" selectOption={setRoom}/>
          </div>
          <div className='add-property-rooms'>
              <RoomsNumber room="Living rooms" name="living-room" selectOption={setRoom}/>
          </div>

          <div className='add-property-button'>
            <button onClick={(event)=>{
              event.preventDefault();
              PostProperty();

            }}
            >Submit</button>
          </div>
          <div className='mt-5'>
            <h2>{message}</h2>
          </div>
        </div>
      </form>
      

    </div>
  )
}

export default AddProperty;