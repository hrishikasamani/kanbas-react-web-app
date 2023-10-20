import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { BiBook } from "react-icons/bi";
import { RxCalendar } from "react-icons/rx";
import { FiInbox } from "react-icons/fi";
import { BiTimeFive } from "react-icons/bi";
import { BiDesktop } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon"/>,
    Dashboard: <TfiDashboard className="wd-icon" />,
    Courses: <BiBook className="wd-icon"/>,
    Calendar: <RxCalendar className="wd-icon"/>,
    Inbox: <FiInbox className="wd-icon"/>,
    History: <BiTimeFive className="wd-icon"/>,
    Studio: <BiDesktop className="wd-icon"/>,
    Commons: <RiLogoutBoxRLine className="wd-icon"/>,
    Help: <AiOutlineQuestionCircle className="wd-icon"/>,
  }

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <img src="/images/image.png" className="list-group-item x"/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}  
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;