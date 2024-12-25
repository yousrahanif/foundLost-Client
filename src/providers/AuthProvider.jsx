import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null)
const provider= new GoogleAuthProvider
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)


const createUser=(email,password)=>{
    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)

}

const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const signInWithGoogle=()=>{
    return signInWithPopup(auth,provider)
}

const signOutUser=()=>{
    setLoading(true)

    return signOut(auth)
}
useEffect(()=>{
//    const unSubscribe= onAuthStateChanged(auth,currentUser=>{
//     //    console.log('currect user', currentUser)
//     //
//        setUser(currentUser)
//        if(currentUser?.email){
//         const user={email: currentUser.email}
//         // axios.post('https://lost-found-server-site.vercel.app/jwt',user, {
//         //     withCredentials: true
//         // })
//         .then(res=>{
//             console.log(res.data)
//             setLoading(false)
//         })

//        }
//        else{
//         axios.post('https://lost-found-server-site.vercel.app/logout',{},{
//             withCredentials: true
//         })
//         .then(res=>{
//             console.log(res.data)
//             setLoading(false)
//         })
//        }
//        setLoading(false)
//     })
//     return ()=>{
//         unSubscribe()
//     }
 const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    //    console.log('currect user', currentUser)
    //
       setUser(currentUser)
       setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }

},[])

    const authInfo={
       createUser, signInUser, user, signOutUser, loading, signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;