import React, { Component } from "react";
import {
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { theme } from "../config/ui";
import "./PostForm.css";

const styles = {
  wrapper: {
    margin: theme.spacing.unit,
    display: "inline",
    position: "relative",
    width: "64px",
    height: "36px",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
};

class PinPoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: false,
    };
    this.submitCallback = this.submitCallback.bind(this);
  }

  async submitCallback(e) {
    e.preventDefault();
    this.setState({ processing: true });
    const { post, map_slug, layer, onDialogClose } = this.props;
    const {text, file} = e.target;
    try {
      await post(map_slug, layer.id, text.value, file.files);
      onDialogClose();
    } catch(err) {
      console.error(err);
      alert(err);
    }
  }

  render() {
    const { processing } = this.state;
    const { onDialogClose } = this.props;
    return (
      <form onSubmit={this.submitCallback} className="pinForm" style={root}>
        <TextField type="text" name="text" placeholder="テキスト(複数行も可!)" rowsMax="5" multiline fullWidth required />
        <input type="file" name="file" accept="image/*" />
        <Button variant="outlined" color="secondary" onClick={onDialogClose}>キャンセル</Button>
        <div style={styles.wrapper}>
          <Button type="submit" variant="contained" color="primary" disabled={processing}>投稿</Button>
          { processing && <CircularProgress size={24} style={styles.buttonProgress} /> }
        </div>
      </form>
    );
  }
}

export default PinPoster;
