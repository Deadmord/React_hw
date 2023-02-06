import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { IStudent } from "../../../models/student.model";
import { addStudent, getStudents, StudentService } from "../../../bl/services";
import { ProgressSpinner } from "primereact/progressspinner";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "./style.scss";

export const ListStudentsPage = () => {
  //   const [nstudent, setNStudent] = useState<IStudent>({} as IStudent);
  const [students, setStudents] = useState<IStudent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStudents = async () => {
      const students = await StudentService.getStudents();
      setTimeout(() => {
        students && setStudents(students);
        setIsLoading(false);
        console.log(students);
      }, 1000);
    };

    getStudents();
  }, []);
  return (
    <div>
      <h1>Students</h1>
      {isLoading ? (
        <ProgressSpinner
          aria-label="Loading"
          style={{ width: "50px", height: "50px", margin: "auto" }}
        ></ProgressSpinner>
      ) : (
        <>
          <DataTable
            autoLayout={true}
            resizableColumns={true}
            value={students}
            responsiveLayout="scroll"
            className="our-prng-table"
          >
            <Column
              field="firstName"
              header="FirstName"
              sortable
              filter
              filterPlaceholder="Search by name"
            ></Column>
            <Column
              field="lastName"
              header="LastName"
              sortable
              filter
              filterPlaceholder="Search by name"
            ></Column>
            <Column field="age" header="Age" sortable></Column>
            <Column field="operation" header="Operation">
            </Column>
          </DataTable>
        </>
      )}
    </div>
  );
};
