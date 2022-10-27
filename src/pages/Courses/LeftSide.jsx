import React from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

const LeftSide = ({ course }) => {
    console.log(course);
    return (
      <div className="">
        <Link to={`/courses/${course._id}`}>
          <Button
            style={{ width: "100%" }}
            variant="outline-info"
            className="mb-2 py-3 fs-6"
          >
            {course.tl}
        
          </Button>
        </Link>
      </div>
    );
};

export default LeftSide;