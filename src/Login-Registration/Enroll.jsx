import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import "./logRes.css";

const Enroll = () => {
    const {user} = useContext(AuthContext)
    return (
      <div className="text-center container py-5 mt-5 mb-5 border login-design">
        <h1 className="mb-3">
          Welcome to a new Journey <br></br>
        </h1>
        <h2 className="text-success mb-3">{user?.displayName}</h2>
        <h5>
          Email: {user?.email}  
        </h5>
      </div>
    );
};

export default Enroll;