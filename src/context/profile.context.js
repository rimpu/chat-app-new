import React, { createContext, useState,useContext,useEffect } from "react";
import { auth, database } from "../misc/firebase";

const ProfileContext = createContext();

export const ProfileContextProvider = ({children}) => {
  const [profile,setProfile] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    let userRef ="";
   const authUnsubscribe = auth.onAuthStateChanged(authObj =>{
     if(authObj){
      userRef = database.ref(`/profiles/${authObj.uid}`);
      userRef.on('value',(snapshot)=>{
        const {name,createdAt} = snapshot.val();
        const profileObj ={
          uid : authObj.uid,
          email : authObj.email,
          name,
          createdAt
        }
        setProfile(profileObj);
        setIsLoading(false);
      })
      
     }else{
      if(userRef){
        userRef.off();
      }
       setProfile(null);
       setIsLoading(false);
     }
   })
   return ()=>{
    authUnsubscribe();
    if(userRef){
      userRef.off();
    }
   }
  }, [])
  return (
  <ProfileContext.Provider value={{profile,isLoading}}>
    {children}
  </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext);