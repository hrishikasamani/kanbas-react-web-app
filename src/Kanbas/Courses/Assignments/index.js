import React from "react";
import AssignmentList from "./AssignmentList";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import "./index.css";
import { addAssignment } from "./assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";

function Assignments() {
  const { assignmentId } = useParams();
  const dispatch = useDispatch();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);
  const assignments = db.assignments;
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);

  return (
    <div className="wd-flex-grow-1">
      <input placeholder="Search for Assignment"/>
      <div className="wd-flex-row-container-1 wd-flex-grow-1">
            <button class="btn1">
              <AiOutlinePlus/>
              Group</button> 
            <button class="btn1 btn-danger" onClick={() => dispatch(addAssignment({ ...assignment, _id: assignmentId }))}>
              <AiOutlinePlus/>
                Assignment
            </button>
            <button class="btn1">
            <BiDotsVerticalRounded/>
            </button>
      </div>      
        <hr />
      <AssignmentList/>
    </div>
  );
}
export default Assignments;