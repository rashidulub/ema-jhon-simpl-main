import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProviders = ({children}) => {

   const [user, setUser]= useState('')
   const [loading, setLoading]= useState(true)

   const createUser =(email, password)=>{
       setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password)
   }
   const signIn= (email,password)=>{
       setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
   
   const logOUt= ()=>{
    return signOut(auth)
   }

// user observer state   

   useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
   setUser(currentUser)
   setLoading(false)
    })
    // stop observing//
    return ()=>{
        return unsubscribe();
    }
   },[])

    const AuthInfo ={
            user,
            loading,
            createUser,
            signIn,
            logOUt,
            
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;