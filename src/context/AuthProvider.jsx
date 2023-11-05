import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    //Create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //Sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //Log out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }






    //User state observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser);
            setLoading(false);
        }));

        return () => {
            unSubscribe();
        }
    }, []);


    console.log(user)


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider