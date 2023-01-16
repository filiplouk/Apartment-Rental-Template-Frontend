import React from "react";

function Filters() {
  return (
    <div className="filters row">
      <div className="col-12 filters-box">
        <h2 className="filters-box__heading ">Dates</h2>
        <div className="filters-box__content">
          <label for="start">Move In</label>
          <input
            className="form-control form-control-lg mt-3 mb-3"
            type="date"
            id="start"
            name="trip-start"
            value="2023-01-22"
            min="2023-01-22"
            max="2023-12-31"
          ></input>
          <label for="stop">Move Out</label>
          <input
            className="form-control form-control-lg"
            type="date"
            id="stop"
            name="trip-stop"
            value="2023-01-22"
            min="2023-01-22"
            max="2023-12-31"
          ></input>
        </div>
      </div>
      <div className="col-12 filters-box">
        <h2 className="filters-box__heading">Type</h2>
        <div className="filters-box__content">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              Entire Apartment
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              Private Room
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              Shared Room
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" for="flexCheckDefault">
              Student Campus
            </label>
          </div>
        </div>
      </div>

      <div className="col-12 filters-box">
        <h2 className="filters-box__heading">Price</h2>
        <div className="filters-box__content">
          <input className="range" placeholder="Min"></input>-
          <input className="range" placeholder="Max"></input>
        </div>
      </div>
    </div>
  );
}

export default Filters;
