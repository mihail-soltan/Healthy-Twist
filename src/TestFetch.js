import React from 'react';
import axios from 'axios';

class TestFetch extends React.Component {
  // State of your application
  state = {
    authors: [],
    error: null,
  };

  // Fetch your authors immediately after the component is mounted
  componentDidMount = async () => {
      console.log("hello")
    try {
      const response = await axios.get('https://healthy-twist.herokuapp.com/authors');
      console.log(response.data)
      this.setState({ authors: response.data });
    } catch (error) {
      this.setState({ error });
      console.log(error)
    }
  };

  render() {
    const { error, author } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestFetch;
