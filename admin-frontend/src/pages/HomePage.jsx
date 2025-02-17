import React, { useEffect } from 'react'
import { getAdminRefreshToken } from '../apiServices'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()
  const token = getAdminRefreshToken()

  

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])

  return (
    <div>HomePage</div>
  )
}

export default HomePage