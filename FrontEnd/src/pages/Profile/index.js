import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api'

import './style.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  const [incidents, setIncidents] = useState([])


  useEffect(()=>{
    api.get('profile',{headers: {Authorization: ongId}}).then(response => setIncidents(response.data))

    
  },[ongId])


  return (
   <div className="profile-container">
     <header>
        <img src={logoImg} alt="logo"/>

        <span>Bem Vinda, {ongName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
        
        
        <button type="button">
          <FiPower size={20} color="#e02041"/>
        </button>
     </header>

     <h1>Casos Cadastrador</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÂO</strong>
            <p>{incident.description}</p>
            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-br', {style:'currency', currency:"BRL"}).format(incident.value)}</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        ))}
        

       
      </ul>
    </div>
  );
}
