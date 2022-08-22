import React, { useEffect, useState } from 'react';
import  Axios  from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import './style.css'
import {  AddTaskApi, DoneTaskApi, GetTaskApi, RejectTaskApi, RemoveTaskApi } from '../../redux/actions/ToDoListAcion';

function ToDoListRedux(props) {
    const [state, setState] = useState({
        
        values : {
            taskName :''
        },
        errors : {
            taskName :''
        },

    });
    console.log(Axios);
    const dispatch = useDispatch();
    
    const {taskList} = useSelector(state =>state.ToDoListReducer);
    
    const getTask = () => {
       dispatch(GetTaskApi())
    }
    useEffect(() =>
        {
            getTask();
            
        }
    
    ,[])

    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, i) => {
            return <li key={i}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button onClick={() =>{
                        deleteTask(item.taskName)
                    }} type="button" className="remove">
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button onClick={() =>{
                        doneTask(item.taskName)
                    }} type="button" className="complete">
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }
  
    const renderTaskDone = () => {
        return taskList.filter(item => item.status).map((item, i) => {
            return <li key={i}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button  onClick={() =>{
                        deleteTask(item.taskName)
                    }} type="button"  className="remove">
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button onClick={() =>{
                        rejectTask(item.taskName)
                    }} type="button" className="complete">
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }



   const deleteTask = (taskName) =>{
      dispatch(RemoveTaskApi(taskName))

    }
  const  doneTask = (taskName) =>{
       dispatch(DoneTaskApi(taskName))
    }
   const rejectTask =(taskName) =>{
       dispatch(RejectTaskApi(taskName));
    }




    const handleChange =(e) =>{
        let {name,value} = e.target;
        const newValues = {
            ...state.values,
            [name] : value
        }
       

        const newErrors = {
            ...state.errors
        }
        let regString = /^[a-z A-Z]+$/;
        if(!regString.test(value) || value.trim() === '')
        {
            //  newErrors[name] == value vua nhap
            newErrors.taskName = name + ' is invalid !';
           
        }else {
            newErrors.taskName = '' ;
        }
        setState({
            ...state,
            values: newValues,
             errors: newErrors,
        
        })

    }
    const addTask = (e) =>{
        e.preventDefault();
       dispatch(AddTaskApi(state.values.taskName));
    }
    return (
        <form>
            {/* <button className='btn btn-primary' onClick={getTask} >Get Task List</button> */}
            <div className="card">
                <div className="card__header">
                    <img src={require('./bg.png')} alt='vmm' />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input onChange={handleChange} name='taskName' id="newTask" type="text" placeholder="Enter an activity..." />
                            <button onClick={addTask} id="addItem">
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <p className='text text-danger' >{state.errors.taskName}</p>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {renderTaskToDo()}

                            </ul>
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                                {renderTaskDone()}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {'}'}
        </form>
    )
}

export default ToDoListRedux;