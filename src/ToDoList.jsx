import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const ToDoList = (props) =>{
    const [line,setLine] = useState(false);    
    
    return (
        <>  
            <div className="todo-list">
                <button className="delBtn">
                    <DeleteIcon 
                    onClick={()=>{
                        if(line){
                            props.delFun(props.id);
                        }
                        else{
                            setLine(true);
                        }
                    }}/>
                </button>
                <li style={{textDecoration: line ? "line-through" : "none"}} > {props.text} </li>
            </div>
        </>
    );
}
export default ToDoList;