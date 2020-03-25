import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import "./style.css"

import logoImg from '../../assets/logo.svg'


export default function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')

  function checkInputs(){
    if(!title || !description || !value){
      alert("Preencha todos os Campos")

      return true
    }
  }


  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

    const inputIncorrect = checkInputs()

    if (inputIncorrect) return

    const data = {title, description, value}


    try{

     await api.post('incidents', data, {headers: {Authorization: ongId}})

     history.push('/profile')
    }catch(err){
      alert("Falha ao Criar Caso!")
    }

  }
  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="heroes"/>
        <h1>Cadastrar Novo Caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

        <Link className="back-link" to="/profile">
        <FiArrowLeft size={16} color ="#e02041"/>
          Voltar para Home
        </Link>
      </section>

      <form onSubmit={handleSubmit}>
        <input placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea  placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
        <input placeholder="Valor em Reais"  value={value} onChange={e => setValue(e.target.value)}/>
        <button className="button" type="submit" >Cadastrar</button>

      </form>
    </div>
  </div>
  );
}
