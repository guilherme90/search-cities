# Search Cities ###

Uma simples API para buscar estados e cidades, usando MongoDB & NodeJS. As collections de estado e cidades encontra-se em `collections`.

## Endpoint

#### Listar os estados
```
http://8000/api/states

// response
[
    {
        "_id": "5954ea71d6a3ec1bfc019129",
        "uf": "12",
        "sigla_uf": "AC",
        "nome_uf": "Acre"
    },
    {
        "_id": "5954ea71d6a3ec1bfc019135",
        "uf": "27",
        "sigla_uf": "AL",
        "nome_uf": "Alagoas"
    },
    ...
]
```

#### Listar todas as cidades de um estado
* 35 é o id do estado (São Paulo)
```
http://8000/api/states/35/cities

// response
[
    {
        "_id": "58a1e69ee4bb1c0ff8006b2f",
        "nome": "ADAMANTINA"
    },
    {
        "_id": "58a1e69ee4bb1c0ff8006b31",
        "nome": "ADOLFO"
    },
    {
        "_id": "58a1e69ee4bb1c0ff8006b4f",
        "nome": "AGUAI"
    },
    ...
]
```

#### Fazer busca pelo nome das cidades
```
http://8000/api/states/16/cities?search=mogi

// response
[
    {
        "_id": "58a1e69ee4bb1c0ff8007730",
        "nome": "MOGI DAS CRUZES"
    },
    {
        "_id": "58a1e69ee4bb1c0ff8007731",
        "nome": "MOGI-GUACU"
    },
    {
        "_id": "58a1e69ee4bb1c0ff8007732",
        "nome": "MOGI-MIRIM"
    }
]
```

## Código dos estados
* 11 - Rondônia
* 12 - Acre
* 13 - Amazônas
* 14 - Rodaima
* 15 - Pará
* 16 - Amapá
* 17 - Tocantins
* 21 - Maranhão
* 22 - Pauí
* 23 - Ceará
* 24 - Rio Grande do Norte
* 25 - Paraíba
* 26 - Pernambuco
* 27 - Alagoas
* 28 - Bahia 
* 31 - Minas Gerais
* 32 - Espírito Santo
* 33 - Rio de Janeiro
* 35 - São Paulo
* 41 - Paraná
* 42 - Santa Catarina
* 43 - Rio Grande do Sul
* 50 - Mato Grosso do Sul
* 51 - Mato Grosso
* 52 - Goiás
* 53 - Distrito Federal
* 54 - Sergipe