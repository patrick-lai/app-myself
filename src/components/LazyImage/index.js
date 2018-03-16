import React from "react";
import styles from "./styles";
import { ScaleLoader } from "react-spinners";

export default class LazyImage extends React.Component {
  state = {};

  componentWillMount = () => this.loadImage(this.props.image);
  componentWillReceiveProps = nextProps => this.loadImage(nextProps.image);

  // Basic loader
  loadImage = () => {
    this.setState({ imageUrl: null });
    const { uri } = this.props;
    const img = new Image();
    img.onload = () => this.setState({ imageUrl: uri });
    img.src = uri;
  };

  render = () => {
    const { imageUrl } = this.state;
    return (
      <div className={styles.container}>
        {imageUrl ? (
          <img src={imageUrl} />
        ) : (
          <ScaleLoader color="rgb(136, 136, 136)" />
        )}
      </div>
    );
  };
}
