import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, getUser } from "../../redux/action";
import { Modal, Button } from "react-bootstrap";
import "./addUser.css";

const AddUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addUser(fullName, email, age));
    dispatch(getUser());
    handleClose();
  };
  return (
    <div className="add">
      <Button className="Btn" onClick={handleShow}>
        Add
      </Button>
      <div>
        
      </div>
      <Modal  show={show} onHide={handleClose}>
        <Modal.Header  className="model" closeButton>
          <Modal.Title className="add-title">Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="model" >
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="model">
          <Button className="Btn" onClick={handleClose}>
            Close
          </Button>
          <Button className="Btn" type="submit" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;
