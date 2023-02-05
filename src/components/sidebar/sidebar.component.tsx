import React, { useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';


import "./style.css"

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CallIcon from "@mui/icons-material/Call"
import MovieCreationIcon from "@mui/icons-material/MovieCreation"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import EducationIcon from "@mui/icons-material/School"
import FaceIcon from "@mui/icons-material/Face"
import LogoutIcon from "@mui/icons-material/Logout"
import { useAuth0 } from "@auth0/auth0-react";

export const SidebarComponent = () => {
    const { isAuthenticated, isLoading, user, logout, loginWithRedirect } = useAuth0();
    const [visibleCustomToolbar, setState] = useState<boolean>(false);

    if (isLoading) return <div>Loading-sidebar-...</div>;

    if (isAuthenticated && user) {
        return (
            <div className="nav-container">
                <Sidebar visible={visibleCustomToolbar} onHide={() => setState(false)} modal={false} className=" bg-violet-400 text-right p-sidebar-custom">
                    <div className="grid grid-cols-1 gap-4 w-35">
                        <Link className="nav-link active text-start" aria-current="page" to="/">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <HomeIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Home</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/about">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <InfoIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>About</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/movies">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <MovieCreationIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Movies</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/games">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <SmartToyIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Games</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/contactus">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <CallIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Contact us</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/students">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em' }} >
                                <EducationIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Students</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/profile">
                            <Button type="button" onClick={(e) => setState(false)} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em', marginTop: '5em' }} >
                                <FaceIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>{user.given_name}</span>
                            </Button>
                        </Link>
                        <Link className="nav-link active text-start" aria-current="page" to="/">
                            <Button type="button" onClick={(e) => { logout(); setState(false) }} className="p-button-secondary p-button-text text-white" style={{ marginRight: '.25em', marginTop: '5em' }} >
                                <LogoutIcon /> <span className="section-name" style={{ marginLeft: '.25em' }}>Logout</span>
                            </Button>
                        </Link>

                        {/* {isAuthenticated && (
                        <li className="logout-btn">
                        <button className="btn btn-danger" onClick={() => logout()}>
                            Logout
                        </button>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <li className="logout-btn">
                        <button className="btn btn-success" onClick={() => loginWithRedirect()} >
                            Login
                        </button>
                        </li>
                    )} */}
                    
                    </div>
                </Sidebar>
      
                <Button icon="pi pi-arrow-right" onMouseMove={(e) => setState(true)} className=" text-end  bg-violet-400" />
            </div>

        );
    } else
    {
        return (

            <button className="btn btn-success" onClick={() => loginWithRedirect()} style={{ marginRight: '.25em', marginTop: '2em' }}>
                Login
            </button>
        )
    }
}