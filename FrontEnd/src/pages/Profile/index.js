import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'


import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
   <div className="profile-container">
     <header>
        <img src={logoImg} alt="logo"/>

        <span>Bem Vinda, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
        
        
        <button type="button">
          <FiPower size={20} color="#e02041"/>
        </button>
     </header>

     <h1>Casos Cadastrador</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÂO</strong>
          <p>Descrição Teste</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÂO</strong>
          <p>Descrição Teste</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÂO</strong>
          <p>Descrição Teste</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso Teste</p>
          <strong>DESCRIÇÂO</strong>
          <p>Descrição Teste</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
