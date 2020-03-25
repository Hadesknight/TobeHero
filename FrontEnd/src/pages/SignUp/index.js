import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import "./styles.css"

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function SignUp(){
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="heroes"/>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
          <FiArrowLeft size={16} color ="#e02041"/>
            Voltar para tela de Login
          </Link>
        </section>

        <form>
          <input placeholder="Nome da Ong"/>
          <input type="email" placeholder="E-mail"/>
          <input placeholder="WhatsApp"/>
          <div className="input-group">
            <input placeholder="Cidade"/>
            <input placeholder="UF" style={{width: 80}}/>
          </div>
          <button className="button" type="submit" >Cadastrar</button>

        </form>
      </div>
    </div>
  )
}