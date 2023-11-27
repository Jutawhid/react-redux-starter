import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_jutemplate/layout/core'
import ParentPage from "./parents/ParentsPage";
import AllAdminPage from './admins/AllAdminPage';
import ChildPage from './childs/ChildsPage';
import * as React from 'react'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Parents',
    path: '/user/',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },

]
const UserPage: React.FC = () => {

  return (
    <> 
      <Routes>
        
          <Route
            path='parents/*'
            element={<ParentPage/>}
          />

          <Route
            path='childs/*'
            element={<ChildPage/>}
          />

          <Route
            path='admins/*'
            element={<AllAdminPage/>}
          />

          <Route index element={<ParentPage/>} />
        
      </Routes>
    </>
  )
}

export default UserPage;