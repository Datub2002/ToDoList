import {call,  delay,  put, takeLatest} from 'redux-saga/effects'
import { ToDoListService, toDoListService } from '../../services/ToDoListService';
import { STATUS_CODE } from '../../util/constants/settingSystem';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constant/LoadingConst';
import { ADD_TASKLIST_API, DELETE_TASKLIST_API, DONE_TASKLIST_API, GET_TASKLIST_API,  REJECT_TASKLIST_API,  SET_TASK_API } from '../constant/ToDoListConst';




function * getTaskApiGen(){
   try{

      yield put({
         type : DISPLAY_LOADING
      })

      yield delay(1000);
       let {data,status} = yield call(toDoListService.getTaskApi)
       console.log(data);
       // dung put de lay gtri thah cong 
       if(status === STATUS_CODE.SUCCESS)
       {
            console.log(data);
          yield put({
             type: SET_TASK_API,
             taskList: data
            })
       }else {
         console.log('err');
       }
      
      yield put({
         type : HIDE_LOADING
      })
   }catch(err){
      console.log('error', err);
   }
       
   
}
export function * theoDoiActionGetTaskApi(){
   yield takeLatest(GET_TASKLIST_API,getTaskApiGen)   

}


function * addTaskApiGen(action){
   //call api
   try{

    let {data,status} =  yield call(
         () =>{
            return  toDoListService.addTaskApi(action.taskName)
            
         }
         )
         if(status === STATUS_CODE.SUCCESS)
         {
            yield put({
               type : GET_TASKLIST_API
            })
           
         }    
      }catch(err)
      {
         console.log('err',err.respone.data);
      }
        
       
    
      }
  
export function * theoDoiActionAddTaskApi(){
   yield takeLatest(ADD_TASKLIST_API,addTaskApiGen)
}

function * deleteTaskApiGen(action)
{
      try{
         let {data,status} = yield call(() =>{
            return toDoListService.deleteTaskApi(action.taskName)
         })
         if(status === STATUS_CODE.SUCCESS)
         {
            alert(data);
            yield put({
               type : GET_TASKLIST_API
            })
         }
      }catch(err)
      {
         console.log('err',err.respone.data);
      }
}
export function * theoDoiActiondeleteTaskApi(){
   yield takeLatest(DELETE_TASKLIST_API,deleteTaskApiGen)
}
function * doneTaskApiGen(action){
   console.log(action);
      try{
         let {data,status} = yield call(()=>{
            return toDoListService.doneTaskApi(action.taskName)
         })
         if(status === STATUS_CODE.SUCCESS){
            alert(data);
            yield put({
               type : GET_TASKLIST_API
            })
         }
      }catch(err)
      {
         console.log('err',err.respone.data);
      }
}
export function * theoDoiActionDoneTaskApi()
{
   yield takeLatest(DONE_TASKLIST_API,doneTaskApiGen)
}
function * rejectTaskApiGen(action) {
   try{
      let {data,status} = yield call(() =>{
         return toDoListService.rejectTaskApi(action.taskName)
      })
      if(status === STATUS_CODE.SUCCESS)
      {
         alert(data);
         yield put({
            type : GET_TASKLIST_API
         })
      }
   }catch(err)
   {
      console.log('err',err.response.data);
   }
}
export function * theoDoiActionRejectTaskApi()
{
   yield takeLatest(REJECT_TASKLIST_API,rejectTaskApiGen)
}