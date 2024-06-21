import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

const limitsPerWeek = 24;

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const totalHours = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  const addTaskObj = (taskObj) => {
    const obj = {
      ...taskObj,
      id: randomIdGenerator(),
      type: "entry",
    };
    if (totalHours + taskObj.hr > limitsPerWeek) {
      return window.alert("You boss no more alcohol allowed. Limits reached.");
    }

    setTaskList([...taskList, obj]);
  };

  const handleOnDelete = (id) => {
    if (
      window.confirm("Are you sure, You didn't drink this?? Hey, Be honest ")
    ) {
      setTaskList(taskList.filter((item) => item.id !== id));
    }
  };

  const switchTask = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          item.type = type;
        }
        return item;
      })
    );
  };
  const randomIdGenerator = (lenght = 6) => {
    const str = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZCVBNM";
    let id = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      id += str[randomIndex];
    }
    return id;
  };
  return (
    <>
      {/* title */}
      <div className="wrapper pt-5">
        <h1 className="text-center">
          <div>Welcome,</div>
          <div>
            <h2>Now you can track your Alcohol Comsumption</h2>
            <h3>Remember No cheating allowed</h3>
          </div>
        </h1>

        <div className="container">
          {/* <!-- form --> */}
          <Form addTaskObj={addTaskObj} />

          {/* <!-- tables --> */}
          <Table
            taskList={taskList}
            switchTask={switchTask}
            handleOnDelete={handleOnDelete}
          />

          <div className="alert alert-success mt-5">
            Total Alcohol Permited per week{" "}
            <span id="totalHours">{totalHours}</span> Alcohol Units
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
