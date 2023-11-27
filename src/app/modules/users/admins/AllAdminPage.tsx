import { Routes, Route } from "react-router-dom";
import { AdminList } from "./AdminList";
import { AddNewAdmin } from "./AddNewAdmin";



const AllAdminPage = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminList />} />
        <Route path="create" element={<AddNewAdmin />} />
      </Routes>

    </>
  )
}

export default AllAdminPage;