import React from "react";

import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem
            os casos da sua ONG
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size="16" color="#E02041"></FiArrowLeft>
            Voltar ao logon
          </Link>
        </section>

        <form action="">
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="WhatsApp" />

          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
