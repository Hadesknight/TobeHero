import React from 'react';
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import heroesImg  from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function SignIn() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID"/>
          <button type="submit" className="button">Entrar</button>


          <Link className="back-link" to="/register">
          <FiLogIn size={16} color ="#e02041"/>
            Não Tenho Cadastro
          </Link>
        </form>


      </section>

      <img src={heroesImg} alt="heroes"/>
    </div>
  );
}
