
import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div className='flex flex-row gap-3 shadow-lg'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Admin