import "./index.css"
function Account() {
    return(
        <div className="heading">
            <h1>Account</h1>
        </div>
    )
}
export default Account;

// import { Link, useParams, useLocation } from "react-router-dom";
// import "./index.css";
// import NewBread from "../../components/newBread";
// function Account() {
//   const links = ["Account", "Sign In", "Sign Up"];
//   const { courseId } = useParams();
//   const { pathname } = useLocation();
//   return (
//     <div>
//         <NewBread />
//         <div className="list-group wd-course-navigation " style={{ width: 150 }}>
//       {links.map((link, index) => (
//         <Link
//           key={index}
//           to={`/Kanbas/Courses/${courseId}/${link}`}
//           className={`list-group-item ${pathname.includes(link) && "active"}`}>
//           {link}
//         </Link>
//       ))}
//     </div>
//     </div>
//   );
// }


// export default Account;