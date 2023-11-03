import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import {AiOutlineFileText} from "react-icons/ai";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) { 
  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="wd-courses">
          <h2>Published Courses ({courses.length})</h2>
          <hr />

<div className="edit">
  <div>
  <input value={course.name} style={{ marginBottom:'5px'}} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
  </div>
  <div>
  <input value={course.startDate} style={{ marginBottom:'5px' }} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
  </div>
<div>
<div className="commands">
    <button onClick={addNewCourse} style={{ width: '80px', marginBottom:'5px' }} className="btn btn-success float-end">
        Add
      </button>
</div>
<button className="btn btn-dark float-end" onClick={updateCourse} >
        Update
      </button>
</div> 
</div>  
      <div className="flex-container"> 
      
        {courses.map((course, index) => (

        <div className="flex-item">
          <div className="card">
            <img src="/images/card.png" class="card-img-top" alt="..."/>
            <div className="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="title">
            {course.name}
            </Link>
            <div key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-text">
            {course._id}
            </div>
              <p class="card-desc">202410-1 Fall23 Semester Term</p>
              <br/>
              <AiOutlineFileText className="wd-icon"/>
              
              <button className="btn btn-danger float-end" 
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            <button className="btn btn-warning float-end" 
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
          </div>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;