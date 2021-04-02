import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Auth Form</NavLink><br></br>
          <NavLink to="/add-accounts">Add accounts</NavLink><br></br>
          <NavLink to="/display-accounts">Display accounts</NavLink><br></br>
          <NavLink to="/update-accounts/:id/edit">Edit accounts</NavLink><br></br>
       </div>
    );
}
 
export default Navigation;
