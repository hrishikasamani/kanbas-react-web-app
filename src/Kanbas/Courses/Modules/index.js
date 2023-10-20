import ModuleList from "./ModuleList";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import "./index.css"
function Modules() {
  return (
    // <div>

<div className="wd-flex-row-container">
  <div className="wd-flex">
            <button class="btn"> Collapse all</button>
            <button class="btn"> View Progress</button>
            <button class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <AiOutlineCheckCircle className="circle"/>
                  Publish All
                </button>  
            <button class="btn btn-danger">
              <AiOutlinePlus/>
                Module
            </button>
            <button class="btn">
            <BiDotsVerticalRounded/>
            </button>
  </div> 
        <hr />
        <ModuleList />
      </div>
    // </div>
  );
}
export default Modules;