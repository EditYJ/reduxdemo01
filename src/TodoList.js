import React, { Component } from "react";
import store from "./store";

import TodoListUI from "./TodoListUI";
import {
  changeInputAction,
  addTodoListAction,
  delTodoListAction
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.storeChange = this.storeChange.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.delTodoList = this.delTodoList.bind(this);

    // 订阅redux的状态，一旦store改变就会调用[storeChange]方法
    store.subscribe(this.storeChange);
    console.log(store.getState());
  }

  render() {
    return (
      <TodoListUI
        defaultValue={this.state.defaultValue}
        changeInputValue={this.changeInputValue}
        addTodoList={this.addTodoList}
        listData={this.state.listData}
        delTodoList={this.delTodoList}
      />
    );
  }

  // 改变input框内容
  changeInputValue(e) {
    // 更改的信息
    const action = changeInputAction(e.target.value);
    // 将更改的信息传入store，改变仓库数据
    store.dispatch(action);
  }

  // 添加列表项
  addTodoList() {
    const action = addTodoListAction();
    store.dispatch(action);
  }

  // 删除列表项
  delTodoList(index) {
    const action = delTodoListAction(index);
    store.dispatch(action);
  }

  // 更改状态
  storeChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
