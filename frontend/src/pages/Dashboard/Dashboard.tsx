import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  let {userId,isLoaded} = useAuth();
  let navigate = useNavigate()
  useEffect(() => {
    if(isLoaded && !userId){
        navigate('/auth/sign-in')
    }
  },[isLoaded,userId,navigate])

  if(!isLoaded)
    return <h1>Loading...</h1>
  return (
    <div className="text-red-600">
      dashboard
    </div>
  )
}

export default Dashboard

