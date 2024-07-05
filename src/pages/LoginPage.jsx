import React from "react";

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h1>Iniciar Sesión</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>

        <div className="login-options">¿Olvidaste tu contraseña?</div>
      </div>
    </div>
  );
}

export default LoginPage;
