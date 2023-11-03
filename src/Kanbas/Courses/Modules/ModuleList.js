import React , { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //       ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter(
  //     (module) => module._id !== moduleId));
  // };
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // }
  return (
    <ul className="list-group" style={{marginRight: 10}}>
      <li className="list-group-item">

      <div className="edit">
  <div>
  <input className="form-control w-70" style={{ marginBottom:'5px'}} value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))
       }
        />
        <textarea className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
      }
        />
  </div>
<div>
<div>
<button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success float-end">Add</button>
<button  onClick={() => dispatch(updateModule(module))}style={{ width: '80px' }} className="btn btn-dark float-end" >
        Update
      </button>
</div>
</div> 
</div>  
      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <button className="btn btn-danger float-end"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <button className="btn btn-warning float-end" 
              onClick={(event) => dispatch(setModule(module))}>
              Edit
            </button>
            <b>{module.name}</b>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    {lesson.name}
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul> 
  );
}
export default ModuleList;