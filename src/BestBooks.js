import React from 'react';
import axios from 'axios';
import Book from './Book';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      books: []
    }
  }

  setModalShowTrue = () => {
    this.setState({modalShow: true})
  }

  setModalShowFalse = () =>{
    this.setState({modalShow: false})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleBookCreate({
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    })
  }

  handleBookCreate = async (bookInfo) => {
    console.log('Book info: ' + bookInfo);
    try {
      const API = process.env.REACT_APP_URL;
      const URL = `${API}/books`;
      const res = await axios.post(URL, bookInfo);
      const createdBook = res.data;

      this.setState({
        books: [...this.state.books, createdBook]
      })

    } catch (error) {
      console.log(error.response)
    }
  }

  getBooks = async () => {
    try{
      const API = process.env.REACT_APP_URL;
      const URL = `${API}/books`;
      const resBooks = await axios.get(URL);
      this.setState({ books: resBooks.data });
    }catch(error){
      console.log(error.response);
    }
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
        <Button variant='primary' onClick={this.setModalShowTrue}>Add Book</Button>
        <BookFormModal modalShow={this.state.modalShow} setModalShowFalse={this.setModalShowFalse} handleSubmit={this.handleSubmit}/>
      </>
    )
  }
}

export default BestBooks;
