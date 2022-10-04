import React from 'react';
import axios from 'axios';
import Book from './Book';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    const API = process.env.REACT_APP_URL;
    const URL = `${API}/books`;
    const resBooks = await axios.get(URL);
    this.setState({ books: resBooks.data });
  }

  componentDidMount() {

    this.getBooks();

  }

  render() {

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <>
            <Book books={this.state.books} />
            
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
