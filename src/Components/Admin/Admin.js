import React from "react";
import login from "../../login.json";
import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
          {login.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
