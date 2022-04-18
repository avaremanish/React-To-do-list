/* eslint-disable no-undef */
import Form from "./Form";
import "./App.css";
import Filter from "./Filter";
import Tasks from "./Tasks";
import { useState } from "react";
function App() {
  const [filter, setFilter] = useState("all");
  const [newId, setNewId]= useState(3);
  const[ tasks, setTasks]= useState( [  
    
    {
      id: 1,
      name: "Drink water",
      done: false,
    },
    {
      id: 2,
      name: "Go to GYM",
      done: true,
    },
  ]);
  const forSubmit = (value) =>{
      const newTask={
            id: newId,
            name: value,
            done:false
      };
    
    setTasks([...tasks, newTask]);
    setNewId(newId + 1 )
  }

  const onCheckedHandler= (id,checked)=>{
          setTasks(tasks.map(item=> {

         return   item.id=== id ? {...item, done: checked} :item;


          }));
  };
  
    const onFilterChange =(newValue)=>{

          setFilter(newValue);
    }

    const filterTasks = ()=> {

      if(filter === 'active'){
        return tasks.filter(item =>item.done === false);
      }
      else if(filter === 'completed'){
        return tasks.filter(item => item.done === true);
      }
      return tasks;
    }

    const deleteHandler = (id) => {
      setTasks(
        tasks.filter((item) => {
          return item.id !== id;
        })
      );
    };

  return (
    
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <Form onSubmit={forSubmit} />
              <Filter onFilterChange = {onFilterChange}/>
              <Tasks tasks={filterTasks()} onCheckedHandler={onCheckedHandler} deleteHandler={deleteHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
