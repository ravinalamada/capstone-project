import React, { useState } from 'react';

function Image({className, photo}) {

  const [hovered, setHoverd ] = useState(false);

  function HandleMouseEnter(e) {
      setHoverd(true)
  }

  function HandleMouseLeave() {
    setHoverd(false);
    console.log('leave');
  }

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div className={`${className} image-container`} onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave}>
      <img src={photo.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  )
}

export default Image;
