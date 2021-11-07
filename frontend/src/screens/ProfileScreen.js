import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch update profile
  };
  return (
    <div>
      <NavLink className="smalltext" to="/">
        &#129056; Back to shopping
      </NavLink>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Your Profile</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlfor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={user.name}
              ></input>
            </div>
            <div>
              <label htmlfor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={user.email}
              ></input>
            </div>
            <div>
              <label htmlfor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
              ></input>
            </div>
            <div>
              <label htmlfor="confirmPassword">Confirm Password</label>
              <input
                id="password"
                type="password"
                placeholder="Re-type password"
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update Profile
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
