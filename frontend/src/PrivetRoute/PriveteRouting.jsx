import React, { useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from "flowbite-react";

const PriveteRouting = ({ children }) => {
  const { user, loading } = useContext(AuthContext);  // Get user and loading from context
  const location = useLocation();  // Get current location to pass to the login page

  if (loading) {
    return (
      <div className='text-center'>
        <Spinner aria-label="Default status example" />  {/* Loading Spinner */}
      </div>
    );
  }

  if (user) {
    return children;  // If user is authenticated, render children (Dashboard)
  }

  // If user is not authenticated, redirect to login page
  return (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PriveteRouting;
