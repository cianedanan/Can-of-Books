import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Book extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Carousel style={{ backgroundColor: 'black', color: 'white', height: '800px' }}>
                        {this.props.books.map((data, idx) => {
                            return (
                                <Carousel.Item key={data._id}>
                                    <div id='carousel'>
                                        <h2>{data.title}</h2>
                                        <div id='carousel-content'>
                                            <div>
                                                <h3>Description</h3>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => this.props.handleDelete(data)} key={idx}>Delete Book</button>
                                    </div>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </Container>
            </>
        );
    }
}

export default Book;