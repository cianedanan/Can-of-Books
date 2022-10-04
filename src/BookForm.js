import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';


class BookForm extends React.Component {
	render() {
		return (
			<>
			
				<Container>
					<Form onSubmit={this.props.handleSubmit}>
						<Form.Group className="mb-3" controlId="title">
							<Form.Label>Enter Book Title</Form.Label>
							<Form.Control placeholder="Enter Book Title" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="description">
							<Form.Label>Enter book description</Form.Label>
							<Form.Control placeholder="Enter book description" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="status">
							<Form.Check type="checkbox" label="Is the book available?" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Container>
			</>
		)
	}
}


export default BookForm;