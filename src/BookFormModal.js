import React from 'react';
import BookForm from './BookForm';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.css';

class BookFormModal extends React.Component {
	render() {
		return (
			<>
				<Modal
				  show={this.props.modalShow}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton onHide={this.props.setModalShowFalse}>
						<Modal.Title id="contained-modal-title-vcenter">
							Add a Book
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<BookForm handleSubmit={this.props.handleSubmit}/>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.setModalShowFalse}>Close</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}


export default BookFormModal;