import React from "react";
import { Route, Routes } from "react-router-dom";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
//import useRole from "../../bl/hooks/useRole";
//import { HeaderComponent, LoginComponent } from "../../components";
import { HomePage, AboutPage, ContactUsPage, GamesPage, MoviesPage, ProfilePage, StudentsPage, NotFoundPage } from "../../pages";
import "./style.scss"
//import { ProtectedRoute } from "../../routes/protected.route";

export const MainLayout = () => {
  //const { isAdmin } = useRole();
  return (
    <div className="app-container">
        <div className="nav-container text-start">
            <SidebarComponent />
        </div>
        <div className="page-container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/students" element={<StudentsPage />} />
                  {/* <Route path="/students" element={<ListStudentsPage />} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </div>
  );
};
