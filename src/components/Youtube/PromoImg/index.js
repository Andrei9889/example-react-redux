import React from 'react';
import {Link} from 'react-router-dom';

function PromoImg(props){
  const id = props.id.videoId;
  const image = props.snippet.thumbnails.default.url;

  return (
    <Link to={`/youtube/${id}`}>
      <img src={image} alt='фото'/>
    </Link>
  );
}

export default PromoImg;