import React from 'react';
import Header from "./Header";
import TaskBar from "./TaskBar";
import TaskList from "./TaskList";
const Edb = ({ user, handleLogout,data}) => {
  const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = storedEmployees.find(emp => emp.id == user);
  return (
    <div className="p-10 h-screen">
      <Header user={user} handleLogout={handleLogout} />
      <TaskBar data={employee}/>
      <TaskList />
    </div>
  );
};
export default Edb;
