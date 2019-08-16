import React from "react";

import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder={props.defaultValue}
          style={{ width: "250px", marginRight: "5px" }}
          value={props.defaultValue}
          onChange={props.changeInputValue}
        />
        <Button type="primary" onClick={props.addTodoList}>
          增加
        </Button>
      </div>
      <div style={{ margin: "10px", width: "300px" }}>
        <List
          bordered
          dataSource={props.listData}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button
                  onClick={() => props.delTodoList(index)}
                  type="danger"
                  size="small"
                  shape="circle"
                  icon="line"
                />
              ]}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoListUI;
