import React from 'react';

class GifSearch extends React.Component {
  state = {
    search: ''
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.generateGifs(this.state.search)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Enter a Search Term:</label>
          <input value={this.state.search} name="search" onChange={this.handleChange} type="text" id="search"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }


}

export default GifSearch;