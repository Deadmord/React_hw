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
      <form>
        <div className="m-3 d-flex w">
          <label className="form-label mr-3">First Name</label>
          <input
            type="text"
            className="form-control w-96"
            id="exampleInputEmail1"
            aria-describedby="nameHelp"
            placeholder="Please enter your first name"
            onChange={(e) => handleChange(e, "firstName")}
          />
        </div>
        <div className="m-3 d-flex">
          <label className="form-label mr-3">Last Name</label>
          <input
            type="text"
            className="form-control w-96"
            aria-describedby="nameHelp"
            placeholder="Please enter your last name"
            onChange={(e) => handleChange(e, "lastName")}
          />
        </div>
        <div className="m-3 d-flex">
          <label className="form-label mr-10">Age</label>
          <input
            type="number"
            className="form-control ml-5 w-96"
            aria-describedby="ageHelp"
            placeholder="Please enter your age"
            onChange={(e) => handleChange(e, "age")}
          />
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
