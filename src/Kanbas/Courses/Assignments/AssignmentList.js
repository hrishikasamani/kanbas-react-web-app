import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";

function AssignmentList() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = db.assignments;
    // const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    // const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const courseAssignments = assignments.filter(
      (assignment) => assignment.course === courseId);
    const [assignmentIdToDelete, setAssignmentIdToDelete] = useState(null);

      const handleDeleteClick = (assignmentId) => {
        // Show confirmation dialog here (e.g., using window.confirm)
    
        const shouldDelete = window.confirm('Are you sure you want to delete this assignment?');
    
        if (shouldDelete) {
          dispatch(deleteAssignment(assignmentId));
        }
      };
  return (

    <div>
      <h5>Assignments for course {courseId}</h5>
      <div className="flex-row-container">
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
            {/* <button className="btn btn-danger float-end"
              onClick={() => dispatch(deleteAssignment(assignment._id))}>
              Delete
            </button> */}
            <button className="btn btn-danger float-end" onClick={() => setAssignmentIdToDelete(assignment.id)}>Delete</button>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
export default AssignmentList;