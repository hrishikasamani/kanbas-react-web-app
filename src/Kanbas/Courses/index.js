import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation/index.js";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Breadcrumbs from "../../components/Breadcrumbs";


function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen] = pathname.split("/");
  // screen = screen.replace("%20"," ");
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <Breadcrumbs/>
      {/* Course {course.name} / {screen} */}
      <hr style={{marginLeft: "120px", }}/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "300px",
            top: "80px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;