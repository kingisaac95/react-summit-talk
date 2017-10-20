import React from 'react';
import PropTypes from "prop-types";
import { gql, graphql } from 'react-apollo';

const ApolloExample = ({ data: { allAlbums = [] } }) => {
  return (
    <div className="cb">
      <div className="row">
        <h1 className="searchTerm">GraphQL + Apollo Gallery</h1>
        {
          allAlbums.map(album =>
            <div key={album.id} className="row image-album">
              <h4 className="space-10">{album.title}</h4>
              {
                album.Photos.map(photo =>
                  <div key={photo.id} className="col-md-6">
                    <div className="image-wrapper text-center">
                      <img className="img-thumbnail img-responsive" src={photo.imageUrl} alt="image_here"/>
                      <h5 className="searchTerm">{photo.title}</h5>
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

ApolloExample.propTypes = {
  data: PropTypes.object
};

export default graphql(gql`
  query GalleryQuery {
    allAlbums {
      id
      title
      Photos {
        id
        album_id
        title
        imageUrl
      }
    }
  }
`)(ApolloExample);
