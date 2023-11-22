// import { Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "hhttps://kanbas-node-server-app-hnne.onrender.com/api/courses";
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };
    const deleteCourse = async (course) => {
      const response = await axios.delete(
        `${URL}/${course._id}`
      );
      setCourses(courses.filter(
        (c) => c._id !== course._id));
    };  

  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation/>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard"/>} />
          <Route path="Account" element={<Account/>}/>
          <Route path="Dashboard" element={<Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}/>
          }/>
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
          <Route path="Calendar" element={<Calendar/>}/>
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;