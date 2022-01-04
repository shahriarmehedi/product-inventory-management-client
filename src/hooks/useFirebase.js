/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    ///////// GOOGLE SIGN IN POPUP //////////
    const signInUsingGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                ////////// SET ERROR //////////
            }).catch(error => {
                setError(error.message)
            })
    }
    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state changed', user);
                setUser(user);
            }
        })
    }, [])

    return {
        signInUsingGoogle, user, error, logOut
    }
}

export default useFirebase;