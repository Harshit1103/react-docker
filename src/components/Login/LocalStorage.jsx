  const employees= [
    {
      "name": "John",
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review the pull requests from the dev team.",
          "taskDate": "2025-02-25",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Discuss project roadmap with the team.",
          "taskDate": "2025-02-26",
          "category": "Meetings",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Resolve reported UI bugs in the dashboard.",
          "taskDate": "2025-02-27",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "name": "Lisa",
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries for better performance.",
          "taskDate": "2025-02-28",
          "category": "Database",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Documentation",
          "taskDescription": "Update API documentation for new endpoints.",
          "taskDate": "2025-03-01",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "name": "Maria",
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Security Patch",
          "taskDescription": "Apply the latest security patches to servers.",
          "taskDate": "2025-02-29",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Server Maintenance",
          "taskDescription": "Perform routine maintenance on cloud servers.",
          "taskDate": "2025-03-02",
          "category": "Maintenance",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Network Upgrade",
          "taskDescription": "Upgrade the office network hardware.",
          "taskDate": "2025-03-03",
          "category": "IT",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "name": "Alex",
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Client Presentation",
          "taskDescription": "Prepare and present the project demo to the client.",
          "taskDate": "2025-03-04",
          "category": "Client Relations",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "UI Design",
          "taskDescription": "Create new UI mockups for the product dashboard.",
          "taskDate": "2025-03-05",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 0
      }
    },
    {
      "name": "Smith",
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Testing",
          "taskDescription": "Perform unit testing on new application modules.",
          "taskDate": "2025-03-06",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Deployment",
          "taskDescription": "Deploy the latest release to production servers.",
          "taskDate": "2025-03-07",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "System Monitoring",
          "taskDescription": "Monitor system logs for potential issues.",
          "taskDate": "2025-03-08",
          "category": "Monitoring",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 0,
        "completed": 1,
        "failed": 1
      }
    }
  ]
  const admin= {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }


  
 export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
 }
  
 export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
   
   return {employees,admin}
 }
  