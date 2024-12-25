import React from 'react'
import UserFooter from '../../components/User/UserFooter'
import UserNavbar from '../../components/User/UserNavbar'
import { Outlet } from "react-router"
function UserRoot() {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
      
    </>
  )
}

export default UserRoot
