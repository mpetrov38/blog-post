import {createContext,useContext,useEffect,useState} from "react"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    signOutWithEmailAndPassword ,
    signOut ,
    onAuthStateChanged
 } from "firebase/auth";
 import {auth} from "../db/db-config"

const UserContext = createContext('');

export const AuthContextProvider = ({children}) =>{
    const [user,setUser] = useState({})
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const logout = () =>{
        return signOut(auth);
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(user);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])

    return(
        <UserContext.Provider value={{createUser , user , logout , login ,}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}