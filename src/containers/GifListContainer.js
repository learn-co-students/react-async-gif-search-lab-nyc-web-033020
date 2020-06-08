import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

const apiKey = `${process.env.REACT_APP_API_KEY}`;
const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=25&offset=0&rating=G&lang=en`;

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    fetch(`${baseUrl}&q=cat`)
      .then((res) => res.json())
      .then((json) => this.saveGifs(json.data));
  }

  saveGifs = (gifs) => {
    const gifArr = [];
    for (var i = 0; i < 3; i++) {
      gifArr.push(gifs[i]);
    }
    this.setState({ gifs: gifArr });
  };

  renderGifs = () => {
    return this.state.gifs.map((gif) => <GifList key={gif.id} {...gif} />);
  };

  render() {
    console.log("state: ", this.state.gifs);
    return (
      <div>
        <GifSearch />
        {this.renderGifs()}
      </div>
    );
  }
}

export default GifListContainer;
