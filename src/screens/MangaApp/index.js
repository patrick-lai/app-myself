import React from "react";
import LazyImage from "components/LazyImage";
import styles from "./styles.scss";

const images = [
  "assets/images/mangoManga/0.jpg",
  "assets/images/mangoManga/1.jpg",
  "assets/images/mangoManga/2.jpg",
  "assets/images/mangoManga/3.jpg"
];

export default () => {
  return (
    <div className="page padded">
      <div className={styles.container}>
        <p style={{ marginTop: 0 }}>
          React native manga reader app.<br />
          - Saves favourites.<br />
          - Remote notification when a new chapter is updated.<br />
          - Infinite scroll loading.
        </p>
        <div className={styles.images}>
          {images.map((image, i) => (
            <div>
              <LazyImage uri={image} key={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
