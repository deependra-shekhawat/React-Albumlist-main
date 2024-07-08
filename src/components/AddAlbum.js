import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //this function gets all the input like userid and title then calls add album function to add it to the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title);
  }

  return (
    <>
      {/* Navbar */}
      <Navbar path="/" page="Home" />

      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Enter New Album Details</h4>
            <div className="form-group">
              <label htmlFor="aaform-userid-inp">Enter User Id:</label>
              <input 
                id="aaform-userid-inp" 
                type="number" 
                className="form-control" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="aaform-title-inp">Enter Album Title:</label>
              <input 
                id="aaform-title-inp" 
                type="text" 
                className="form-control" 
              />
            </div>
            <div className="mt-3">
              <Link to="/">
                <button 
                  onClick={getAlbumFormData} 
                  className="btn btn-primary"
                >
                  Add To List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAlbum;
