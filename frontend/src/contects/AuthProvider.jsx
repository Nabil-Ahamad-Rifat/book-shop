import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/Firebase.config.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
// Create a Context for authentication
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user (signup)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));  // Always stop loading after the operation
  };

  // Login with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false));  // Always stop loading after the operation
  };

  // Login with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .finally(() => setLoading(false));  // Always stop loading after the operation
  };

  const logout =()=>{
    return signOut(auth)

  }
  // Check for user state change (i.e., if user logs in or out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  // Update user state when auth state changes
      setLoading(false);  // Set loading to false when done
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  // Make auth functions and user state available to the components that need them
  const authInfo = {
    user,
    createUser,  // Function to create a new user
    signInWithGoogle,  // Function to sign in with Google
    loading,
    login,
    logout  // Function to log in with email and password
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
