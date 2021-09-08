import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../redux/action";
import EditUser from '../EditUser/EditUser'
import "./UserCard.css";


const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <div  className="d-flex justify-content-around">
      <Card style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title className="title">FullName:{user.fullName}</Card.Title>
          <Card.Text className="sous-title">
            <h4>Email:{user.email}</h4>
            <h4>Age:{user.age}</h4>
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              variant="primary"
              className="btn"
              onClick={() => {
                dispatch(deleteUser(user._id));
                getUser();
              }}
            >
              Delete
            </Button>
            <EditUser user={user} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
