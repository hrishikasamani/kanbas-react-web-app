import db from "../../Database";
import {AiTwotoneSetting} from "react-icons/ai"
import {LiaFileImportSolid} from "react-icons/lia"
import {IoIosFunnel} from "react-icons/io"
import {LiaFileExportSolid} from "react-icons/lia"
import { useParams } from "react-router-dom";
import "./index.css";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="wd-flex-row-container">
  <div className="wd-flex">
            <button class="btn"> 
            <LiaFileImportSolid/>
            Import</button>
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <LiaFileExportSolid/>
              Export
            </button>
            <button class="btn">
            <AiTwotoneSetting/>
            </button>
  </div> 
  <table className="table1">
    <thead>
      <th> Student Names</th>
      <th>Assignment Names</th>
    </thead>
    <tbody>
      <tr>
        <td>
        <input placeholder="Search for Students"/>
        </td>
        <td>
        <input placeholder="Search for Assignment"/>
        </td>
      </tr>
      <tr>
      <button class="btn">
            <IoIosFunnel/>
              Apply Filters
            </button>
      </tr>
    </tbody>
  </table>
      </div>
      


      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

