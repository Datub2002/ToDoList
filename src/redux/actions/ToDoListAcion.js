import Axios from "axios";
import { SET_TASK_API } from "../constant/ToDoListConst";



export const GetTaskApi = () => {
  return dispatch => {
    const promise = Axios({
      url: 'https://svcy.myclass.vn/api/ToDoList/GetAllTask',
      method: 'GET'
    });
    promise.then(
      (result) => {
        dispatch({
          type: SET_TASK_API,
          taskList: result.data
        })
        console.log('success');
      }
    );
    promise.catch(
      (err) => {
        console.log(err.response.data);
      }
    );
  }
}
export const AddTaskApi = (taskName) => {
  return dispatch => {
    const promise = Axios({
      url: 'https://svcy.myclass.vn/api/ToDoList/AddTask',
      method: 'POST',
      data: { taskName: taskName }
    })
    promise.then((result) => {
      dispatch(GetTaskApi());
    });
    promise.catch((err) => {
      alert(err.response.data)
    })
  }
}
export const RemoveTaskApi = (taskName) => {
  return dispatch => {
    const promise = Axios({
      url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: 'DELETE'
    })
    promise.then(
      (result) => {
        alert(result.data);
        dispatch(GetTaskApi());

      }
    );
    promise.catch((err) => {
      alert(err.response.data)
    });
  }
}
export const DoneTaskApi = (taskName) => {
  return dispatch => {
    const promise = Axios({
      url: `https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: 'PUT',
    })
    promise.then(
      (result) => {
        alert(result.data)
        dispatch(GetTaskApi());

      }
    );
    promise.catch((err) => {
      alert(err.response.data)
    });
  }
}
export const RejectTaskApi = (taskName) => {
  return dispatch => {
    const promise = Axios(
      {
        url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
        method: 'PUT',

      }
    )
    promise.then(
      (result) => {
        alert(result.data)
        dispatch(GetTaskApi());
        
      }
    );
    promise.catch((err) => {
      alert(err.response.data)
    });
  }
}


