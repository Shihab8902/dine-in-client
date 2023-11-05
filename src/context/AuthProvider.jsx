import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';

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


    //Sign in with Google
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //Log out user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }






    //User state observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            if (currentUser) {
                axios.post('http://localhost:9000/jwt', loggedUser, { withCredentials: true });
                axios.get('http://localhost:9000/users', { withCredentials: true })
                    .then(res => {
                        const isExist = res.data?.find(dbUser => dbUser.email === currentUser.email);
                        if (!isExist) {
                            axios.post('http://localhost:9000/users', currentUser);
                        }
                    });
            } else {
                axios.get('http://localhost:9000/logout', { withCredentials: true })

            }
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
        signInWithGoogle,
        logOutUser
    }

    return <UserContext.Provider value={userInfo}>
        {children}
    </UserContext.Provider>
}

export default AuthProvider