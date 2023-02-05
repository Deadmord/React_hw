import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddStudentPage, ListStudentsPage } from ".";
import { ProfilePage } from "../profile/profile.page";
import { StudentNavBar } from "./navigation/student-navigationbar";

export const StudentsPage = () => {
    const [route, setRoute] = useState('list');

    //const changeRoute = (route: string) => setRoute(route);
  return (
      <div>
          <StudentNavBar route={route} setRoute={setRoute} />
          <div className="student-container">
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
