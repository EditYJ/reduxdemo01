import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DEL_TODO_LIST
} from "./actionType";

export const changeInputAction = (value)=>({
  type: CHANGE_INPUT_VALUE,
  value
})
export const addTodoListAction = ()=>({
  type: ADD_TODO_LIST
})
export const delTodoListAction = (index)=>({
  type: DEL_TODO_LIST,
  index
})