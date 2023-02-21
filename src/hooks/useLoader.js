import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function(){
    const location = useLocation()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1200)
    },[location.pathname])

    return {
        loading
    }
}