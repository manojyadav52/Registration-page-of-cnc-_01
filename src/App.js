import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {Button, Container, Form, Modal, ModalFooter, ModalHeader, ModalTitle} from 'react-bootstrap';
import { useState } from 'react';

function App() {
  
  const [show, setShow]=useState(true);
  return (
    <>
   

       <Container>
        <Button className='mt-5 fw-bold' varient='success'  onClick={ ()=> setShow(true)}>
          <i className='fa fa-plus'></i>Add User</Button>
         <Modal show={show} >
            <Modal.Header  closeButton onClick={ ()=> setShow(false)} >
              <Modal.Title>
                <h1>Registration</h1>
              </Modal.Title>

            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control  type='text' name='name' placeholder='Enter your name' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control  type='email' name='email' placeholder='Enter your Email' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control  type='password' name='password' placeholder='Enter your name' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact Number:</Form.Label>
                  <Form.Control  type='contact' name='contact' placeholder='Enter your name' />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Profile Picture:</Form.Label>
                  <Form.Control  type='file' name='dp' placeholder='upload you picture' />
                </Form.Group>
              </Form>

              <Form.Group>

              <Button variant='danger'>Submit</Button>
              
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
              <Button variant='danger' onClick={ ()=> setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
       </Container>

    </>
  );
}

export default App;
