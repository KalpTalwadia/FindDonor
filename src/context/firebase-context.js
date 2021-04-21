import React, { useContext, useState, useEffect } from "react"
import { auth,db } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [userDetails,setUserDetails]= useState();
  function signup(userData) {
        return auth.createUserWithEmailAndPassword(userData.email, userData.password).then((newUser)=>{
         
        db.collection("donors")
        .doc(newUser.user.uid)
        .set({
          email:userData.email,
          username:userData.name,
          bloodGroup: userData.bloodGroup,
          date: userData.date,
          admin: false
        })
       
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  useEffect(()=>{
    const unsubscribeDetails=db.collection("users")
    .doc(currentUser?.uid)
    .onSnapshot((doc)=>{
       setUserDetails(doc.data())
    })
    return unsubscribeDetails
 },[currentUser])


  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribeAuth
  }, [])


  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    userDetails
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}