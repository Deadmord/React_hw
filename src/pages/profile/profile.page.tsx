import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage = () => {
    const { isLoading, user, isAuthenticated } = useAuth0();
    
    const header = (
        user && <img alt="Card" src={user.picture} style={{ width: '100px', marginLeft: '15em', paddingTop: '2em' }}/>
    );
    
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isAuthenticated && user) {
    return (
        <div className=" text-left">
            <Card title={"Name: " + user.name} subTitle="Profole page" style={{ width: '25em', marginLeft: '5em'  }} className="ui-card-shadow bg-purple-50" header={header}>
                <ul style={{ marginLeft: '1em' }}>
                    <tr><td>Firstname: </td><td style={{ paddingLeft: "2em" }}>{user.given_name}</td></tr>
                    <tr><td>Lastname: </td><td style={{ paddingLeft: "2em" }}>{user.family_name}</td></tr>
                    <tr><td>Nickname: </td><td style={{ paddingLeft: "2em" }}>{user.nickname}</td></tr>
                    <tr><td>Birthdate: </td><td style={{ paddingLeft: "2em" }}>{user.birthdate}</td></tr>
                    <tr><td>Gender: </td><td style={{ paddingLeft: "2em" }}>{user.gender}</td></tr>
                    <tr><td>Address: </td><td style={{ paddingLeft: "2em" }}>{user.address}</td></tr>
                    <tr><td>Email: </td><td style={{ paddingLeft: "2em" }}>{user.email}</td></tr>
                    <tr><td>Phone: </td><td style={{ paddingLeft: "2em" }}>{user.phone_number}</td></tr>
                </ul>
                <p className="p-m-0" style={{ lineHeight: '1.5', marginTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam!</p>
            </Card>
        </div>
    );
  }
  return <div></div>;
};
