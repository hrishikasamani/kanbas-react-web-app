import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
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
{/* <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} 
className="btn btn-success float-end">Add</button> */}
<button onClick={handleAddModule} 
className="btn btn-success float-end">Add</button>
<button  onClick={() => handleUpdateModule((module))}style={{ width: '80px' }} className="btn btn-dark float-end" >
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
              onClick={() => handleDeleteModule(module._id)}>
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