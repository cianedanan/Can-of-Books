import React from 'react';
import UpdateBookForm from './UpdateBookForm';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.css';

class BookFormModalUpdate extends React.Component {
	render() {
		return (
			<>
				<Modal
				  show={this.props.modalShowUpdate}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton onHide={this.props.setUpdateModalFalse}>
						<Modal.Title id="contained-modal-title-vcenter">
							Update a Book
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<UpdateBookForm book={this.props.book} handleUpdate={this.props.handleUpdate}/>
						
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.setUpdateModalFalse}>Close</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}


export default BookFormModalUpdate;