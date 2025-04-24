import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Adb from './components/AdminDashboard/Adb';
import Edb from './components/EmployeeDashboard/Edb';
import { AuthContext } from './components/Context/AuthProvider';

function App() {
  const [user, setUser] = useState(localStorage.getItem('loggedInUser')|| null); // Corrected key
  const data = useContext(AuthContext);


  const handleLogin = (email, password) => {
    const storedData = getLocalStorage(); // Retrieve employees & admin
    
    if (!storedData || !storedData.employees) {
      console.error("Employees data is missing!");
      return;
    }
  
    const { employees, admin } = storedData;
  
    // Admin login check
    if (email === admin.email && password === admin.password) {
      console.log("Admin login successful");
      setUser("admin"); // Store "admin" for consistency
      localStorage.setItem("loggedInUser", "admin");
      return;
    }
  
    // Employee login check
    const employee = employees.find(
      (emp) => emp.email === email && emp.password === password
    );
    if (employee) {
      console.log("Employee found:", employee);
      setUser(employee.id); // Store employee ID instead of name
      localStorage.setItem("loggedInUser", employee.id);
      window.location.reload(); // Refresh to update UI
    } else {
      alert("Invalid Credentials");
    }
  };
  
  
  
  
  const getLocalStorage = () => {
    return {
      employees: JSON.parse(localStorage.getItem("employees")) || [],
      admin: JSON.parse(localStorage.getItem("admin")) || []
    };
  };
  
  

  
  
  
  
  
  
  // Load user from localStorage on app startup
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(storedUser);
    }
  }, [localStorage.getItem("loggedInUser")]);
  
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser'); 
  };



  return (
    <>
     {!user && <Login handleLogin={handleLogin} />}
{user && user === "admin" && <Adb handleLogout={handleLogout} />}
{user && user !== "admin" && <Edb user={user} handleLogout={handleLogout}/>}

    </>
  );
  
  
  
}

export default App;
