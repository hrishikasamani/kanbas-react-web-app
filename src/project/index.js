import Signin from "../users/signin";
import '../users/styles.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./navigation";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
  return (
    <div className="d-flex">
      <div className="col-2">
        <Navigation/>
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;