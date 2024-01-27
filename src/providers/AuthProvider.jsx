import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // signOut 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // updateUser 
    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // sign up with google 
    const googleProvider = new GoogleAuthProvider();
    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current-user', currentUser);

            // get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(res => {
                        // console.log(data.data.token);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        })
        return () => {
            return unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        userUpdateProfile,
        googleSignUp,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



