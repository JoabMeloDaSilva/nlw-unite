

let participantes = [
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2024, 4, 22, 19, 20),
      dataCheckIn: null
    },
    {
      nome: "Lucas Silva",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2024, 2, 23, 14, 30),
      dataCheckIn: null
    },
    {
      nome: "Joana Oliveira",
      email: "joana@gmail.com",
      dataInscricao: new Date(2024, 2, 24, 10, 15),
      dataCheckIn: new Date(2024, 4, 25, 20, 15)
    },
    {
      nome: "Pedro Souza",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2024, 2, 25, 8, 45),
      dataCheckIn: null
    },
    {
      nome: "Maria Santos",
      email: "maria@gmail.com",
      dataInscricao: new Date(2024, 2, 26, 16, 10),
      dataCheckIn: new Date(2024, 2, 25, 18, 00)
    },
    {
      nome: "Fernanda Oliveira",
      email: "fernanda@gmail.com",
      dataInscricao: new Date(2024, 2, 27, 11, 20),
      dataCheckIn: null
    },
    {
      nome: "Rafael Silva",
      email: "rafael@gmail.com",
      dataInscricao: new Date(2024, 2, 28, 13, 55),
      dataCheckIn: new Date(2024, 2, 25, 16, 45)
    },
    {
      nome: "Carla Vieira",
      email: "carla@gmail.com",
      dataInscricao: new Date(2024, 2, 29, 9, 30),
      dataCheckIn: new Date(2024, 2, 25, 15, 15)
    },
    {
      nome: "Gustavo Santos",
      email: "gustavo@gmail.com",
      dataInscricao: new Date(2024, 2, 30, 17, 40),
      dataCheckIn: new Date(2024, 2, 25, 14, 30)
    },
    {
      nome: "Ana Oliveira",
      email: "ana@gmail.com",
      dataInscricao: new Date(2024, 2, 31, 12, 20),
      dataCheckIn: new Date(2024, 2, 25, 13, 45)
    }
  
  ];
  
  const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to
    (participante.dataInscricao)
  
    let dataCheckIn = dayjs(Date.now()).to
    (participante.dataCheckIn)
  
    if(participante.dataCheckIn == null) {
       dataCheckIn = `
       <button
        data-email="${participante.email}"
        onclick="fazerCheckiIn(event)"
       >
         confirmar check-in
       </button>
       `
    }
  
  
    return `
      <tr>
          <td>
            <strong>
              ${participante.nome}
            </strong>
            <br>
            <small>
              ${participante.email}
            </small>
          </td>
          <td>${dataInscricao}</td>
          <td>${dataCheckIn}</td>
        </tr>
    `
  }
  
  
  
  const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes) {
     output = output + criarNovoParticipante(participante)
    }
  
    document
    .querySelector('tbody')
    .innerHTML = output
  }
  
  atualizarLista(participantes) 
  
  
  const adicionarParticipante = (event) => {
    event.preventDefault()
  
    const dadosDoFormulario = new FormData(event.target)
  
    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
    }
  
    // Verificar se o participante já existe 
    const participanteExiste = participantes.find((p) => {
      return p.email == participante.email
    }
    )
   
   if(participanteExiste) {
    alert(`email já cadastrado`)
    return
   }
  
  
    participantes = [participante, ...participantes]
    atualizarLista(participantes)
  
    // Limpar o formulario
    event.target.querySelector(`[name="nome"]`).value =""
    event.target.querySelector(`[name="email"]`).value = ""
  
  }
  
  const fazerCheckiIn = (event) => {
    // confirmar se realmente quer o checkIn
    const mensagemConfirmacao = `Tem Certeza que deseja fazer o check-in?`
   
   if(confirm(mensagemConfirmacao) == false) {
    return 
   }
  
    // encontrar o participante dentro da lista 
     const participante = participantes.find((p) => {
      return p.email == event.target.dataset.email
     })
    // atualizar o check-in do participante
      participante.dataCheckIn = new Date()
    // atualizar a lista de participantes
  
    atualizarLista(participantes)
  }