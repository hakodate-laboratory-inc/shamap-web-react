import React, { Component } from "react";

class PinPoster extends Component {
  constructor(props) {
    super(props);
    this.submitCallback = this.submitCallback.bind(this);
  }

  async submitCallback(e) {
    e.preventDefault();
    const { post, map_slug, layer, onPost } = this.props;
    const {text, file} = e.target;
    try {
      const json = await post(map_slug, layer.id, text.value, file.files);
      console.log(json);
      onPost();
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    return (
      <form onSubmit={this.submitCallback}>
        <input type="text" name="text" placeholder="テキスト" />
        <input type="file" name="file" />
        <input type="submit" />
      </form>
    );
  }
}

export default PinPoster;
