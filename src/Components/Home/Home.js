import React from "react";
import Admin from "../Admin/Admin";
import Employee from "../Employee/Employee";
import { ROLE } from "../../Constants";

const Home = (props) => {
  const { role, currentUser } = props;
  return (
    <div>
      {role === ROLE.ADMIN ? (
        <Admin role={role} />
      ) : (
        <Employee currentUser={currentUser} role={role} />
      )}
    </div>
  );
};

export default Home;
