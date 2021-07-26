const contatosJson = require("../models/contatos.json")

const getAll = (req, res) => {
    res.status(200).send(contatosJson)
};

const getByName = (req, res) => {
    const nomeRequerido = req.query.nome
    const nomeFiltro = contatosJson.find(nomes => nomes.nome.includes(nomeRequerido))

    res.status(200).send(nomeFiltro)
};

const getById = (req, res) => {
    const idRequerido = req.params.id
    const contatoFiltro = contatosJson.find(contato => contato.id == idRequerido)

    res.status(200).send(contatoFiltro)
};

const novoContatinho = (req, res) => {
    const nomeContatinho = req.body.nome;
    const contatoContatinho = req.body.celular;
    const redesContatinho = req.body.redesSociais;

    const novoCadastro = {
        id: "123",
        nome: nomeContatinho,
        celular: contatoContatinho,
        redesSociais: redesContatinho
    }

    contatosJson.push(novoCadastro);
    res.status(200).send(novoCadastro);

};

const deletarContato = (req, res) => {
    const idSolicitado = req.params.id;
    const contatosFiltrados = contatosJson.find(contatos => contatos.id == idSolicitado)
    const indice = contatosJson.indexOf(contatosFiltrados)

    contatosJson.splice(indice, 1);

    res.status(200).send(
        [
            {
                'message': 'Eu tu não deletava, mas já que tu querer: contato deletado com sucesso'
            }
        ]
    )
};

const substituirContatinho = (req, res) =>{
    let requiredId = req.params.id;
    let postFromBody = req.body;

    let filteredContacts = contatosJson.find(contatos => contatos.id == requiredId);

    let updateContacts ={
        'id': filteredContacts.id,
        'nome': postFromBody.nome,
        'celular': postFromBody.celular,
        'redesSociais': postFromBody.redesSociais,
    }

    const indiceContacts = contatosJson.indexOf(filteredContacts);
    contatosJson.splice(indiceContacts, 1, updateContacts);
    res.status(200).send({
        'mensagem': 'Contato substituido com Sucesso <3'
    })
};

const substituirNomeContatinho = (req, res) =>{
    const requisicaoId = req.params.id;
    let novoNome = req.body;

    let filtrarNomeContato = contatosJson.find(contato => contato.id == requisicaoId);

    let updateNome ={
        'id': filtrarNomeContato.id,
        'nome': novoNome.nome,
    }

    const indiceContatinhos = contatosJson.indexOf(filtrarNomeContato);
    contatosJson.splice(indiceContatinhos, 1, updateNome);
    res.status(200).send({
        'mensagem': 'Nome do contato substituido com Sucesso <3'
    })
    
}

module.exports = {
    getAll,
    getById,
    getByName,
    novoContatinho,
    deletarContato,
    substituirContatinho, 
    substituirNomeContatinho
}