import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const GIFS_URL = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
const CATS_GIFS_URL = 'https://api.giphy.com/v1/gifs/search?q=CATS_DOGS&api_key=dc6zaTOxFJmzC&rating=g&limit=3'

class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  // componentDidMount(){
  //   fetch(CATS_GIFS_URL)
  //     .then(resp => resp.json())
  //     .then(gifs => {
  //       this.setState({ 
  //         gifs: gifs.data 
  //       })
  //     })
  // }

  generateGifs = (searchQuery) => {
    let parsed = searchQuery.toUpperCase()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${parsed}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({ 
          gifs: gifs.data 
        })
      })
  };

  render(){
    // console.log(this.state.gifs)
    return (
      <div>
        <GifSearch generateGifs={this.generateGifs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  };

};

export default GifListContainer;