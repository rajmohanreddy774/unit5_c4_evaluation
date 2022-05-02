import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggelAuth } from "../Redux/isAuth/action";
import { useNavigate } from "react-router-dom";



export const Logout = () => {
 const navigate= useNavigate()
 const dispatch = useDispatch()
  useEffect(()=>{
    navigate("/")
    dispatch(toggelAuth(true))
  },[])
 
    
  return <>
    
    </>;
};
