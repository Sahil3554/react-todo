// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
import AddIcon from "@material-ui/icons/Add"
function App() {
  const [item,setItem] = useState("");
  const [list,setList] = useState([]);
  const myInput = (event) =>{
    // console.log("clicked");
    setItem(event.target.value);
  }
  const btnFun = () =>{
    if(item !==""){
      setList((cvalue)=>{
        return[...cvalue,item];
      });
      setItem("");
    }
  }
  const deleteItem = (id) =>{
    // console.log('clicked'+id);
    setList((cvalue)=>{
      return cvalue.filter((arr,index)=>{
          return index!==id;
      });
    });
}
  return (
    <>
    <div className="App-header">
      <div className="Main-div">
       
          <h1>ToDo List</h1>
          <div>
          <input type="text" onChange={myInput} value={item} placeholder="Add a Item"/>
          <button onClick={btnFun}><AddIcon /></button>
          <ol>
              {list.map((cValue,index)=>{
                return <ToDoList key={index} id={index} text={cValue} delFun={deleteItem}/>;                
              })}

          </ol> 
        </div>     
      </div>
    </div>
    </>
  );
}

export default App;
