import React, { useState } from "react";
import Header from "../partials/Header";

function DeleteProperty() {
  const [property, setProperty] = useState({
    name: "",
  });
  const [message, setMessage] = useState("");

  function changeName(event) {
    const newName = event.target.value;
    setProperty({
      name: newName,
    });
  }

  function PostDelete() {
    fetch("https://gifted-fly-purse.cyclic.app/properties", {
      method: "DELETE",
      body: JSON.stringify(property),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        setMessage("Property not found");
      });
  }
  return (
    <div>
      <Header />
      <form className="delete-property">
        <div class="form-group ">
          <h2 className="delete-property-heading">Delete a property</h2>

          <div className="delete-property-name">
            <label for="property_name">Property Name</label>
            <input
              required
              class="form-control form-control-lg"
              id="property_name"
              type="text"
              onChange={changeName}
            />
          </div>

          <div className="delete-property-button">
            <button
              onClick={(event) => {
                event.preventDefault();
                PostDelete();
              }}
            >
              Delete
            </button>
          </div>
          <div className="mt-5">
            <h2>{message}</h2>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeleteProperty;
