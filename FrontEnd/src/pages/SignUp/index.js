import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import "./styles.css"

import logoImg from '../../assets/logo.svg'

export default function SignUp(){


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  function checkInputs(){
    if(!name || !email || !whatsapp || !city || !uf){
      alert("Todos os Campos são obrigatorios")
      return true
    }
    return false;
  }

  async function handleSubmit(e){
    e.preventDefault()

    const inputIncorrect = checkInputs()

    if(inputIncorrect) return 


    const data = {name, email, whatsapp, city, uf}

    try{
      const response = await api.post('ongs', data)

    alert(`Seu ID de acesso :${response.data.id}`)

    history.push('/')
    }catch(err){
      alert("Erro ao cadastrar Ong")
    }
    
  }


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

        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Nome da Ong" 
            value={name} 
            onChange={e => setName(e.target.value)}/>

       
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email} onChange={e => setEmail(e.target.value)}/>
      
          <input 
            placeholder="WhatsApp" 
            value={whatsapp}  
            onChange={e => setWhatsapp(e.target.value)}/>
      
          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city} onChange={e => 
              setCity(e.target.value)}/>
            <input placeholder="UF" 
              value={uf} 
              style={{width: 80}}  
              onChange={e => setUf(e.target.value)}/>
          </div>
      
          <button className="button" type="submit" >Cadastrar</button>

        </form>
      </div>
    </div>
  )
}