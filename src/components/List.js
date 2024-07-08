import React from 'react';
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{props.album.title}</h3>
        <div className="btn-group" role="group">
          <Link to="/update-album">
            <button 
              className="btn btn-primary" 
              onClick={() => props.setUpdateAlbum(props.album)}
            >
              Update
            </button>
          </Link>
          <button 
            className="btn btn-danger" 
            onClick={() => props.deleteAlbumFromList(props.album.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
