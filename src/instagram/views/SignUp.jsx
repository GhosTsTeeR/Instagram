import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/instagram-logo.png";
import * as services from '../servises';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import "../../assets/styles/scss/Main.scss";

export default function SignUp() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit =async e => {
      e.preventDefault();
      if (user=== "") {
          console.warn("sin usuario")
      }
      else if (password==="") {
          console.warn("sin usuario")
      }
      else if (password==="") {
          console.warn("sin usuario")
      }
      else if (password==="") {
          console.warn("sin usuario")
      }
      
      else {
          const enviar = await  services.signUp(user, password, nombre, correo);
          console.log("loog="+enviar);
      }
      
  }
  const changeCorreo = (e) => {
    e.preventDefault();
    setCorreo(e.target.value);
};
const changeNombre = (e) => {
  e.preventDefault();
  setNombre(e.target.value);
};
  const changeUser = (e) => {
      e.preventDefault();
      setUser(e.target.value);
  };
  const changePassword = (e) => {
      e.preventDefault();
      setPassword(e.target.value);
  };

  return (
    <div className="main">
      <div className="main__signup">
        <div className="main__signup-container">
          <div className="main__signup-container-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="main__signup-container-header">
            <h1>Registrate para ver fotos y videos de tus amigos</h1>
            <button>
              <div className="columns is-vcentered">
                <div className="column is-2">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="main__signup-container-header-icon"
                  />
                </div>
                <div className="column is 4">
                  <h6> inicia sesion con Facebook</h6>
                </div>
              </div>
            </button>
          </div>
          <div className="main__signup-container-separacion">
            <div className="columns is-vcentered">
              <div className="column is 5">
                <div className="main__signup-container-separacion-raya" />
              </div>
              <div className="column is 1">O</div>
              <div className="column is 5">
                <div className="main__signup-container-separacion-raya" />
              </div>
            </div>
          </div>
          <div className="main__signup-container-content">
            <div className="main__signup-container-content-inputs">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Numero de celular o correo electronico "
                  onChange={changeCorreo}
                />
                <input type="text" placeholder="Nombre completo" onChange={changeNombre}/>
                <input type="text" placeholder="Nombre de usuario" onChange={changeUser}/>
                <input type="text" placeholder="contraseña" onChange={changePassword}/>
                <input type="submit" value="Resgistrarte" />
              </form>
            </div>
          </div>
          <p class="ZGwn1">
            Al registrarte, aceptas nuestras{" "}
            <a
              target="_blank"
              href="https://help.instagram.com/581066165581870"
              tabindex="0"
            >
              Condiciones
            </a>
            , la{" "}
            <a
              target="_blank"
              href="https://help.instagram.com/519522125107875"
              tabindex="0"
            >
              Política de datos
            </a>{" "}
            y la{" "}
            <a target="_blank" href="/legal/cookies/" tabindex="0">
              Política de cookies
            </a>
            .
          </p>
        </div>
      </div>
      <div className="main__signup">
        <div className="main__signup-footer">
          <p class="izU2O ">
            ¿Tienes una cuenta?{" "}
            <a href="/accounts/login/?source=auth_switcher" tabindex="0">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
