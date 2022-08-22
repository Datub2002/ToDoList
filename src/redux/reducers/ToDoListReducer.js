import { SET_TASK_API } from "../constant/ToDoListConst"
const initialState = {
    taskList: [

    ]

}

export default (state = initialState, action) => {
  switch (action.type) {

  case SET_TASK_API:
    {
      state.taskList = action.taskList;
      return { ...state}
    }

  default:
    return {...state}
  }
}
