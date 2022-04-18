/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Task({ name, done,id, onCheckedHandler, deleteHandler }) {
  return (
    <div className={"todo-item" + (done ? 'completed' : '')}>
      <div className="checker">
        <span className="">
          <input type="checkbox" checked={done} onChange={e => onCheckedHandler(id, e.target.checked)}/>
        </span>
      </div>
      <span> {name} </span>
   <button style={{float : "right"} } onClick={() => deleteHandler(id)} className="btn btn-danger">x</button>
    </div>
  );
}
