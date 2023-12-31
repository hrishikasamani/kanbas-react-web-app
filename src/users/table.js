import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsTrash3Fill, BsPencil, BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Additional Info</th>
          </tr>
          <tr>
            <td>
            <div class="col-sm-5">
              <input className="form-control" value={user._id} onChange={(e) => setUser({ ...user, _id: e.target.value })}/>
              </div>
            </td>
            <td>
              <div className="form-group row"> 
              <div class="col-sm-5">
              <input className="form-control" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              </div>
              <div class="col-sm-5">
              <input className="form-control" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              </div>
              </div>
            </td>
            <td>
              <input className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select className="form-control" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
            <BsFillCheckCircleFill onClick={updateUser}
            className="me-2 text-success fs-1 text" />
              <BsPlusCircleFill onClick={createUser}
            className="text-success fs-1 text" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
                <td>{user._id}</td>
              <td>
              <Link to={`/project/account/${user._id}`}>
                {user.username}
              </Link>  
                </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.role}</td>
              <td className="text-nowrap">
    <button className="btn btn-danger me-2">
      <BsTrash3Fill onClick={() => deleteUser(user)} />
    </button>
    <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>
    </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;