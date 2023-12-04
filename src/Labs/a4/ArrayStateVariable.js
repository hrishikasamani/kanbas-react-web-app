import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h2>Array State Variable</h2>
      {/* <input value={newElement} onChange={(e) => setArray(e.target.value)} */}
      <button className="btn btn-success" onClick={addElement}>Add Element</button>
      <ul className="list-group w-50">
        {array.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
            <button className="btn btn-danger float-end" onClick={() => deleteElement(index)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;