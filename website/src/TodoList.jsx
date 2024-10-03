import { useState } from "react";


function ToDoList(){

    const[task,setTask]=useState(['walk the dog','make bearkfast','go to work']);
    const[nwtask,setNwtask]=useState();


    function hinput(event){
        setNwtask(event.target.value)
    }

    function hadd(){
        if (nwtask.trim()!==''){
            setTask(t=>[...t,nwtask]);
            setNwtask('');
        }
        
    }

    function hdelete(index){
        setTask(task.filter((_,i)=>i!==index));
    }

    function hup(index){
        if(index>0){
            const up=[...task];
            [up[index],up[index-1]]=[up[index-1],up[index]]
            setTask(up);
        }

    }

    function hdown(index){
        if(index<task.length-1){
            const down=[...task];
            [down[index],down[index+1]]=[down[index+1],down[index]]
            setTask(down);
        }

    }


    return(
        <div className="to-do-list">
            <div className="header">
                <h2 className="heading">ToDoList</h2>
                <input type="text" onChange={hinput} cl></input>
                <button onClick={hadd} className="button-add">Add</button>
            </div>
            <div className="list">
                <ul>
                    {task.map((task,index)=><li key={index}><span className="text">{task}</span>
                        <button className="button-delete" onClick={()=>hdelete(index)} c button>Delete</button>
                        <button className="button-up" onClick={()=>hup(index)}>up</button>
                        <button className="button-dowm" onClick={()=>hdown(index)}>down</button>
                    </li>)}
                </ul>
            </div>
        </div>
        
    )


}

export default ToDoList;