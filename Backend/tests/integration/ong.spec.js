const request = require('supertest')
const app = require('../../src/app')
const conn = require('../../src/database/connection')

//Testando a ONG, criação de Ongs
describe('ONG', ()=>{

  //Antes de executar o teste, vamos rodar as Migrations para o banco de testes
  beforeEach(async ()=>{
    await conn.migrate.latest();
  })

  //Apos todos os testes, destruir a conexão com o Banco
  afterAll(async ()=>{
    await conn.destroy()
  })

  //No it, colocamos o que o teste vai fazer
  it('should be able to create a new ONG', async ()=>{

    //usamos o request da biblioteca SUPERTESTE para acessar a api, e enviar os dados
    const response = await request(app)
    .post('/ongs')
    .send({
      name:"ONG TESTE",
      email:"apcc@hotmail.com",
      whatsapp: "33991519995",
      city:"Capelinha",
      uf:"MG"
    })

    //no expect, colocamos o que esperamos que aconteça com os testes
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8)
    
  })
})