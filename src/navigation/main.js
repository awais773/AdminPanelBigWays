export default {
  // header: "Main",
  children: [


    {
      id: "/dashboard",
      title: "Dashboard",
      icon: "Curved-Graph",
      navLink: "/dashboard",
    },
    

    {
      id: "Vehicle",
      title: "Vehicle",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Vehicle",
          title: "View Vehicle",
          navLink: "/vehicle",
        },
      ],
    },


    {
      id: "Registration",
      title: "Reguest",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Registration",
          title: "View Reguest",
          navLink: "/registration",
        },
      ],
    },
    // parent code here 
    {
      id: "Parents",
      title: "Parents",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Parents",
          title: "View Parent",
          navLink: "/parent",
        },
      ],
      
    },
    // Divers code here 
     {
      id: "Divers",
      title: "Divers",
      icon: "Curved-AddUser",
      
      children: [
       
          {
          id: "drivers",
          title: "Add Drivers",
          navLink: "/drivers/add",
        },
     
        {
          id: "drivers",
          title: "List Drivers",
          navLink: "/driver/list",
        },
      
      ],
      
    },
    // Care Taker code here 
     {
      id: "CareTaker",
      title: "CareTaker",
      icon: "Curved-EditSquare",
      
      children: [
        {
          id: "Care Taker",
          title: "AddCareTaker",
          navLink: "/caretaker/add",
        },
          {
          id: "Care Taker",
          title: "ListCareTaker",
          navLink: "/caretaker/list",
        },
      ],
    },
    // ...... 
        {
      id: "Driver  Attendance",
      title: "DriverAttendance",
      icon: "Curved-EditSquare",
      
      children: [
        // {
        //   id: "Care Taker",
        //   title: "AddCareTaker",
        //   navLink: "/caretaker/add",
        // },
        //   {
        //   id: "Care Taker",
        //   title: "ListCareTaker",
        //   navLink: "/caretaker/list",
        // },
      ],
    },
    // ...... 
        {
      id: "Student Attendance",
      title: "StudentAttendance",
      icon: "Curved-EditSquare",
      
      children: [
        // {
        //   id: "Care Taker",
        //   title: "AddCareTaker",
        //   navLink: "/caretaker/add",
        // },
        //   {
        //   id: "Care Taker",
        //   title: "ListCareTaker",
        //   navLink: "/caretaker/list",
        // },
      ],
    },
    // ....
        {
      id: "Car Tracker",
      title: "CarTracker",
      icon: "Curved-EditSquare",
      
      children: [
        // {
        //   id: "Care Taker",
        //   title: "AddCareTaker",
        //   navLink: "/caretaker/add",
        // },
        //   {
        //   id: "Care Taker",
        //   title: "ListCareTaker",
        //   navLink: "/caretaker/list",
        // },
      ],
    },
    

   

 

  ]
}