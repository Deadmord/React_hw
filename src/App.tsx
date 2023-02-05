import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './App.css';
import { DefaultLayout, MainLayout } from './layout';

function App() {
    const { isLoading, isAuthenticated, user } = useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
      }
      if (isAuthenticated && user) {
        return (
            <div className="App">
                  <MainLayout />
            </div>
          );
      } else {
        return <DefaultLayout></DefaultLayout>;
      }
}

export default App;
