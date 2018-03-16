import React from 'react';
import LazyImage from 'components/LazyImage';

const images = ['assets/images/mangoManga/0.jpg', 'assets/images/mangoManga/1.jpg','assets/images/mangoManga/2.jpg','assets/images/mangoManga/3.jpg'];

export default () => {
  return <div className="page padded">
    <p>React native manga reader app</p>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {images.map((image, i) => <LazyImage uri={image} key={i}/>)}
    </div>
  </div>;
}
