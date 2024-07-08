import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {

  const getUpdateData = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      <Navbar path="/" page="Home" />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Update Album</h4>
            <div className="form-group">
              <label htmlFor="title-inp">Title: {props.album.title}</label>
              <input 
                type="text" 
                id="title-inp" 
                className="form-control" 
                placeholder="Enter New Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userid-inp">User Id: {props.album.userId}</label>
              <input 
                type="number" 
                id="userid-inp" 
                className="form-control" 
                placeholder="Enter New UserId"
              />
            </div>
            <Link to="/">
              <button 
                type="submit" 
                onClick={getUpdateData} 
                className="btn btn-primary"
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
