import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css"
import {AiOutlineFileText} from "react-icons/ai";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="wd-courses">
          <h2>Published Courses ({courses.length})</h2>
          <hr />
      <div className="flex-row">
      
        {courses.map((course, index) => (

        <div className="flex-col flex-wrap">
          <div className="card">
            <img src="/images/card.png" class="card-img-top" alt="..."/>
            <div className="card-body">
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="btn">
            {course.name}
            </Link>
            <div key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card-text">
            {course._id}
            </div>
              <p class="card-desc">202410-1 Fall23 Semester Term</p>
              <br/>
              <AiOutlineFileText className="wd-icon"/>
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