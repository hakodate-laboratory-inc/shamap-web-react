import React, { Component } from "react";
import {
  Button,
  TextField,
} from "@material-ui/core";
import "./PostForm.css";

class PinPoster extends Component {
  constructor(props) {
    super(props);
    this.submitCallback = this.submitCallback.bind(this);
  }

  async submitCallback(e) {
    e.preventDefault();
    const { post, map_slug, layer, onDialogClose } = this.props;
    const {text, file} = e.target;
    try {
      const json = await post(map_slug, layer.id, text.value, file.files);
      console.log(json);
      onDialogClose();
    } catch(err) {
      console.error(err);
      alert(err);
    }
  }

  render() {
    const { onDialogClose } = this.props;
    return (
      <form onSubmit={this.submitCallback} className="pinForm">
        <TextField type="text" name="text" placeholder="テキスト(複数行も可!)" rowsMax="5" multiline fullWidth required />
        <input type="file" name="file" />
        <Button variant="outlined" color="secondary" onClick={onDialogClose}>キャンセル</Button>
        <Button type="submit" variant="contained" color="primary">投稿</Button>
      </form>
    );
  }
}

export default PinPoster;
