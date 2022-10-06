import {Component} from 'react';
import {Form, Button, Container }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class UpdateBookForm extends Component {
	handleSubmit = (event) =>{
		event.preventDefault();
		const bookToUpdate ={
			title: event.target.title.value || this.props.book.title,
      description: event.target.description.value || this.props.book.description,
      status: event.target.status.checked || this.props.book.status,
			_id: this.props.book._id,
			__v: this.props.book.__v

		}

		this.props.handleUpdate(bookToUpdate);
	}
	render() {
		return (
			<>
			
				<Container>
					<Form onSubmit={this.handleSubmit} >
						<Form.Group className="mb-3" controlId="title">
							<Form.Label>Modify Book Title</Form.Label>
							<Form.Control placeholder="Updated title" defaultValue={this.props.book.title} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="description">
							<Form.Label>Enter book description</Form.Label>
							<Form.Control placeholder="Updated description" defaultValue={this.props.book.description}/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="status">
							<Form.Check type="checkbox" label="Is the book still available?" defaultChecked={this.props.book.status}/> 
							
						</Form.Group>

						<Button variant="primary" type="submit">
							Update
						</Button>
					</Form>
				</Container>
			</>
		)
	}
}


export default UpdateBookForm;