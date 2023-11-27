import React from "react";
import {Routes,Route} from "react-router-dom";
import { CongfigurationListANDUpdate } from "./configurationListAndUpdate";

const ConfigurationPage:React.FC = ()=>{

    return(
        <>
            <Routes>
                  <Route path="/" element={<CongfigurationListANDUpdate/>} />
            </Routes>
        </>
    )
   
}

export default ConfigurationPage;