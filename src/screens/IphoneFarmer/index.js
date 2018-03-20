import React from "react";
import LazyImage from "components/LazyImage";
import styles from "./styles.scss";

const images = ["assets/images/iphoneFarmer/2.png"];

export default () => {
  return (
    <div className="page padded">
      <div className={styles.container}>
        <p>Node iPhone X farmer, this is how i got mine ;)</p>
        <div className={styles.images}>
          {images.map((image, i) => (
            <div key={i}>
              <LazyImage uri={image} key={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
