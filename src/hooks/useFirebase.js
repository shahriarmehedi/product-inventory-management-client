/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { getAuth,signOut,onAuthStateChanged,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const useFirebase = () => {
    //const[isLoading,setIsLoading]=useState(true)
   // const [admin,setAdmin]=useState(false)
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

    // useEffect(()=>{

    //     fetch(`http://localhost:5000/users/${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setAdmin(data.admin))
    //     },[user.email])

    // const saveUser=(email,displayName,method)=>{

    //     const user={email,displayName}
    //     fetch('http://localhost:5000/users',{
    //       method:method,
    //       headers:{
    //         'content-type':'application/json'
    //       },
    //       body:JSON.stringify(user)
    //     })
    //     .then()
    //   }

    return {
        signInUsingGoogle, user, error, logOut
    }
}

export default useFirebase;