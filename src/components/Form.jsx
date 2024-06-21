import React, { useState } from "react";

export const Form = ({ addTaskObj }) => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "hr" ? +value : value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTaskObj(form);
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        action="javascript:void(0)"
        className="border p-5 rounded shadow-lg mt-5"
      >
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Alcohol name"
              name="task"
              id="task"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="1"
              name="hr"
              min="1"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-secondary text-white" type="submit">
              Add Your Alcohol
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
