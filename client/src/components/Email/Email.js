import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Email.css";

const Email = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="Btn" onClick={handleShow}>
        Login
      </Button>
      <div>
        
      </div>
      <Modal className="box-size" show={show} onHide={handleClose}>
        <div className="log">
          <div className="container">
            <p className="heading">Login in</p>
            <div className="box">
              <p>Email</p>
              <div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Entre your Email"
                  />
                </form>
              </div>
            </div>
            <div className="box">
              <p>Password</p>
              <div>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="Password"
                    name=""
                    id=""
                    placeholder="Entre your Password"
                  />
                </form>
              </div>
            </div>
            <button className="loginBtn">Login</button>
            <p className="text">
              Dont have an account? <a href="#">Sign Up</a>
            </p>
            <Modal.Footer>
            <Button className="Btn" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
          </div>

         
        </div>
      </Modal>
    </div>
  );
};

export default Email;
