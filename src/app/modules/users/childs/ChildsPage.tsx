import AllChilds from "./ChildsList";
import { Route, Routes } from "react-router-dom"
import React from "react";

const ChildPage:React.FC = () => {

  return (
    <>

      <Routes>

          <Route path="/" element={<AllChilds />} />

      </Routes>
    </>
  )
}

export default ChildPage;