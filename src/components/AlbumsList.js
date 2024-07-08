import React from 'react';
import List from './List';
import Navbar from './Navbar';

const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar */}
      <Navbar page="Add Album" path="/add-album" />

      <div className="container mt-4">
        <div className="row">
          {props.albums.map((album) => (
            <div className="col-md-4" key={album.id}>
              <List 
                album={album} 
                setUpdateAlbum={props.setUpdateAlbum} 
                deleteAlbumFromList={props.deleteAlbumFromList} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlbumsList;
