import React, { useState, useRef } from "react";

import { Toast } from "primereact/toast";

import { IStudent } from "../../../models/student.model";
import { addStudent } from "../../../bl/services";

import "./style.scss";
export const AddStudentPage = () => {
  const toast = useRef<any>(null);
  const [state, setState] = useState<IStudent>({
    id: 0,
    firstName: "",
    lastName: "",
    age: 0,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setState({ ...state, [key]: e.target.value });
    console.log("current", state);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit", state);
    let res = await addStudent(state);
    show();
  };
  const show = () => {
    debugger;
    toast?.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Message Content",
      life: 3000,
    });
  };

  return (
    <div>
      <h1>Student Form Add Student</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e, "firstName")}
          />
          <div id="emailHelp" className="form-text">
            Please enter your first name
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e, "lastName")}
          />
          <div id="emailHelp" className="form-text">
            Please enter your last name
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e, "email")}
          />
          <div id="emailHelp" className="form-text">
            Please enter your email
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange(e, "phone")}
          />
          <div id="emailHelp" className="form-text">
            Please enter your phone
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
      </div>
    </div>
  );
};
