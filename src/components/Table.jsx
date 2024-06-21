import React from "react";

export const Table = ({ taskList, switchTask, handleOnDelete }) => {
  const entryList = taskList.filter((item) => item.type === "entry");
  const badList = taskList.filter((item) => item.type === "bad");

  return (
    <div className="row mt-5">
      {/* <!-- EntryList --> */}
      <div className="col-md mt-5 bg-transparent">
        <h3 className="text-center">Alcohol Amount</h3>
        <hr />
        <table className="table table-dark table-striped table-hover border rounded">
          <tbody id="entryList">
            {entryList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onClick={() => handleOnDelete(item.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                    <button
                      onClick={() => switchTask(item.id, "bad")}
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <!-- BadList --> */}
      <div className="col-md mt-5 bg-transparent">
        <h3 className="text-center">Reasons you should stop drinking</h3>
        <hr />
        <table className="table table-dark table-striped table-hover border rounded">
          <tbody id="badList">
            {badList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hr} alcohol units</td>
                  <td className="text-end">
                    <button
                      onClick={() => switchTask(item.id, "entry")}
                      className="btn btn-warning"
                    >
                      <i className="fa-solid fa-circle-left"></i>
                    </button>
                    <button
                      onClick={() => handleOnDelete(item.id)}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="alert alert-success">
          Your body could have been free {""}
          <span id="savedHrsElm">
            {badList.reduce((acc, i) => acc + i.hr, 0)}
          </span>{" "}
          Alcohol units
        </div>
      </div>
    </div>
  );
};
