# API REST DE CONTATOS

Demandas de negócio

- Rota principal pra visualizar a apresentação do projeto [ok]
- Visualizar todos os contatos [ok]
- Visualizar os contstos por nome [ok]
- Vsualizar os contatos por id [ok]
- Adicionar um novo contato [ok]
- Alterar os dados de um contato [ok]
- Atualizar o nome de um contato [ok] 
- Deletar um contato [ok]


## API Reference

#### Get all items

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Contatos` | `String` | **Required**. All Contacts |

#### Get name

```http
  GET /contatos/nome
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Nome`      | `String` | **Required**. Contacts names |

#### Get Id

```http
  GET /contatos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Id of item |

#### Add Contacts

```http
  POST /contatos/cadastrar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Cadastrar`      | `String` | **Required**. Add name, cell and instargram |

#### Replace contacts infos

```http
  PUT /substituir${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Substituir`      | `String` | **Required**. Replace name, cell and instargram |

#### Replace contacts name

```http
  PATCH /substituir/nome${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Substituir`      | `String` | **Required**. Replace name|


#### Delete Contacts

```http
  DELETE /contatos/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `Number` | **Required**. Delete contacts by Id |