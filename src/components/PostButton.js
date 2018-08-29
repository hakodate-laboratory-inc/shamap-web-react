import React, { Component } from "react";

class PinPoster extends Component {
  render() {
    const { map_slug, layer_id, post } = this.props;
    return (
      <div>
        <input type="text" placeholder="テキスト" ref={node => this.text = node} />
        <button onClick={() => post(map_slug, layer_id, this.text.value)}>送信!</button>
      </div>
    );
  }
}

export default PinPoster;


