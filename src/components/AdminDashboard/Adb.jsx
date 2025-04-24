// import React from 'react'
// import Header from '../EmployeeDashboard/Header'
// import CreateTask from './CreateTask'
// import AllTask from './AllTask'

// const Adb = ({handleLogout}) => {
//   return (
//     <>
//     <div className='p-10 h-screen'>
//     <Header handleLogout={handleLogout}/>
//     <CreateTask/>
//     <AllTask/>
    

//     </div>
//     </>
//   )
// }

// export default Adb

import React from "react";
import Header from "../EmployeeDashboard/Header";
import CreateTask from "./CreateTask";
import AllTask from "./AllTask";

const Adb = ({ handleLogout }) => {
  return (
    <div className="p-10 h-screen">
      <Header user="admin" handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default Adb;
