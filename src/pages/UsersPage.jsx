import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Table from "react-bootstrap/Table";
import Footer from "../components/Footer";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/`, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error("Error al traer los usuarios:", error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <SideMenu />
        <div id="users-container" className="users-content">
          <div className="d-flex justify-content-between pt-3 px-4">
            <h2 className="fw-bold">Usuarios</h2>
            <a
              id="agregar-usuarios"
              className="btn btn-primary"
              href="#"
              role="button"
            >
              Agregar usuario
            </a>
          </div>
          <Table striped bordered hover className="TablaUsuarios">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.firstname} {user.lastname}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <a href="#">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsersPage;
