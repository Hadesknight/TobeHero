import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import heroesImg  from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function SignIn() {

  const [id, setId] = useState('')

  const history = useHistory()
  async function handleSubmit(e){
    e.preventDefault()
    console.log("teste")

   try{
    const response = await api.post('session', {id})
    localStorage.setItem('ongId', id)
    localStorage.setItem('ongName', response.data.name)

    history.push('/profile')
   }catch(err){
     alert("Falha no login")
   }
    
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
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
