import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DEL_TODO_LIST
} from "./actionType";

const defaultState = {
  defaultValue: "Write SomeThing!",
  listData: ["早八点开会", "晚上下班去买菜", "还得好好学习"]
}; //默认数据

export default (state = defaultState, action) => {

  if(action.type === CHANGE_INPUT_VALUE){
    let newState = JSON.parse(JSON.stringify(state))
    newState.defaultValue = action.value
    return newState
  }
  
  if(action.type === ADD_TODO_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.listData.push(newState.defaultValue)
    newState.defaultValue = ''
    return newState
  }

  if(action.type === DEL_TODO_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.listData.splice(action.index,1)
    return newState
  }

  return state;
};
