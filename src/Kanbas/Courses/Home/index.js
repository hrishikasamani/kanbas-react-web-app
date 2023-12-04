import ModuleList from "../Modules/ModuleList";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiDotsVerticalRounded} from "react-icons/bi"
import {BiImport} from "react-icons/bi";
import {LiaFileImportSolid} from "react-icons/lia";
import {FaRegLifeRing} from "react-icons/fa";
import {GoGraph} from "react-icons/go";
import {TfiAnnouncement} from "react-icons/tfi";
import {FiBell} from "react-icons/fi";
import "./index.css"

function Home() {
    return (
      <div className="row">
        <div className="col-8">
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
        <div className="col-4">
                <button class="btn">
                <BiImport/>
                    Import Existing Content
                </button>
                <button class="btn" >
                  <LiaFileImportSolid/>  
                    Import From Commons
                </button>
                <button class="btn" >
                  <FaRegLifeRing/>  
                    Choose Home Page
                </button>
                <button class="btn" >
                  <GoGraph/>   
                    View Course Stream
                </button><br/>
                <button class="btn" >
                   <TfiAnnouncement/> 
                    New Announcement
                </button><br/>
                <button class="btn">
                <GoGraph/> 
                    New Analytics
                </button><br/>
                <button class="btn">
                   <FiBell/>
                    View Course Notifications
                </button>
                <br/>
                <br/>
                <b>To Do</b>
                <hr />
            <div class="wd-flex-row-container">
                <div>
                    <div className="head">Grade A1 - ENV + HTML</div>
                    <p>100 points- Sep 18 at 11:59pm</p>
                </div>
                <div>
                <div className="head">Grade A2 - CSS + Bootstrap</div>
                <p>100 points- Sep 18 at 11:59pm</p>
                </div>
            </div>
      </div>
      </div>
    );
  }
  export default Home;