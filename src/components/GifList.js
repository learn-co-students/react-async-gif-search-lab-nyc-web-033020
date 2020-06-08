import React, { Component } from "react";

class GifList extends Component {
  render() {
    return (
      <div>
        <h1>Gif</h1>
        <img src={this.props.bitly_url} alt="animated gif" />
      </div>
    );
  }
}

export default GifList;
