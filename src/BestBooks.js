import React from 'react';
import axios from 'axios';
import Book from './Book';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';
import BookFormModalUpdate from './BookFormModalUpdate';

class BestBooks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      modalShowUpdate: false, 
      book: {},
      books: []
    }
  }

  setModalShowTrue = () => {
    this.setState({modalShow: true})
  }

  setModalShowFalse = () =>{
    this.setState({modalShow: false})
  }

  setUpdateModalTrue = (data) => {
    this.setState({modalShowUpdate: true, book: data})
  }

  setUpdateModalFalse = (data) => {
    this.setState({modalShowUpdate: false})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.handleBookCreate({
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.checked
    });
    this.setModalShowFalse();
  }

  handleDelete = async(bookToDelete) => {
    try {
      const API = process.env.REACT_APP_URL;
      const URL = `${API}/books/${bookToDelete._id}`;
      const response = await axios.delete(URL);
      console.log(`Response status: ${response.status}`);
      const filteredBooks = this.state.books.filter(book => book._id !== bookToDelete._id);
      this.setState({books:filteredBooks});
    } catch (error) {
      console.log(error.response);
    }
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


  handleUpdate = async(bookToUpdate) => {
    
    try{
      const API = process.env.REACT_APP_URL;
      const URL = ` ${API}/books/${bookToUpdate._id}`;
      console.log(URL + bookToUpdate);
      const updatedBook = await axios.put(URL, bookToUpdate);
      const updatedBookArray = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook;
      });
      this.setState({
        books: updatedBookArray
      });
    }catch(error){
      console.log( 'Update Book Error: ',error.response);
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
            <Book books={this.state.books} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} setUpdateModalTrue={this.setUpdateModalTrue}/>
          </>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Button variant='primary' onClick={this.setModalShowTrue}>Add Book</Button>
        <BookFormModal modalShow={this.state.modalShow} setModalShowFalse={this.setModalShowFalse} handleSubmit={this.handleSubmit}/>
        <BookFormModalUpdate modalShowUpdate={this.state.modalShowUpdate} setUpdateModalFalse={this.setUpdateModalFalse} handleUpdate={this.handleUpdate} book={this.state.book}/>
      </>
    )
  }
}

export default BestBooks;
