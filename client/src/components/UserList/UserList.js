import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action";
import UserCard from "../UserCard/UserCard";
import './Userlist.css'

const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  return (
    <div >
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="list" >
          {users.map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
