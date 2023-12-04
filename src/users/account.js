import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import './styles.css';
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
      };    
    const navigate = useNavigate();
    const fetchAccount = async () => {
      const account = await client.account();
      setAccount(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
      };    
    useEffect(() => {
        if (id) {
          findUserById(id);
        } else {
          fetchAccount();
        }
      }, []);    
    const save = async () => {
        await client.updateUser(account);
      };
    return (
      <div>
        <h2>Account</h2>
        {account && (
          <div className="account">
            <input className="form-control" value={account.password}
              onChange={(e) => setAccount({ ...account,
                password: e.target.value })}/>
            <input className="form-control" value={account.firstName}
              onChange={(e) => setAccount({ ...account,
                firstName: e.target.value })}/>
            <input className="form-control" value={account.lastName}
              onChange={(e) => setAccount({ ...account,
                lastName: e.target.value })}/>
            <input className="form-control" value={account.dob} 
              onChange={(e) => setAccount({ ...account,
                dob: e.target.value })}/>
            <input className="form-control" value={account.email}
              onChange={(e) => setAccount({ ...account,
                email: e.target.value })}/>
            <select className="form-control" onChange={(e) => setAccount({ ...account,
                role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
            <button className="btn btn-primary w-100" onClick={save}>
              Save
            </button>
            <button className="btn btn-danger w-100" onClick={signout}>
              Sign Out
            </button>
            <Link to="/project/admin/users" className="btn btn-warning w-100">
              Users
            </Link>
          </div>
        )}
      </div>
    );
  }
  export default Account;
  