import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddStudentPage, ListStudentsPage } from ".";
import { ProfilePage } from "../profile/profile.page";
import { StudentNavBar } from "./navigation/student-navigationbar";

export const StudentsPage = () => {
    const [route, setRoute] = useState('list');

    //const changeRoute = (route: string) => setRoute(route);
  return (
      <div className=" d-block">
          <div className="nav-container inline-block" style={{width: "60%"}}>
          <StudentNavBar route={route} setRoute={setRoute} />
          </div>
          <div className="student-container inline-block" style={{width: "60%"}}>
              {route === 'list' && (
                <ListStudentsPage />
              )}
              {route === 'add' && (
                  <AddStudentPage />
              )}
            </div>

    </div>
  );
};
