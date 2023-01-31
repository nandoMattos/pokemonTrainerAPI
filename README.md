# pokemonTrainerAPI

Hi there! This is a simple CRUD API developed to practive a few TypeScript and prisma ORM concepts.

## About 

PokemonCreator is an API to create Pokemons Trainers with its respective pokemon(s), and each Pokemon with its respective(s) type(s).

## How to run for development

1. Clone this repository
2. Install all dependencies:
```bash
npm i
```
3. Create a PostgresSQL database with whatever name you want
4. Configure the `.env` file using the .env.example file

5. Run all migrations:
```bash
npm run migration:run
```
6.Seed db:
```bash
npm run prisma:seed
```
7. Run the back-end in a development environment:
```bash
npm run dev
```

8. If you want, you can import my thunder-client collection that I used for test features using the `thunder-client_pokemon.json` file
- For more infomations of how to import a thunder-client collection, access: https://github.com/rangav/thunder-client-support#importexport

## API Documentation:

With PokemonTrainer, you can manage your Pokemons inserting their name, weight and types. You can add acctually existent ones or create your owns. <br/>

### Ruotes:


### `POST /users` <br/>
- requires a body in the format:
```js
{
  "name": "Ash"
}
```

### `POST /users/:userId/capture/:pokemonId` <br/>
- requires a body in the format:
- user captures pokemon

### `GET /users?name=` <br/>
- accepts a query to filter user name 
- returns an array in the format:
```js
[
  {
    id: 7,
    name: "Ash"
  },
  {
    id: 8,
    name: "Misty"
  }
]
```


### `POST /pokemons` <br/> 
- requires a body in the format:
```js
{
  "name": "Bulbasaur"
  "weight": 6.9,
  "type": ["Grass", "Poison"]
}
```

### `GET /pokemons/?name=pokemonName` <br/>
- accepts a query to filter pokemon name 
- returns an array in the format:
```js
[
  {
    id: 64,
    name: "Pikachu",
    types: [
      {
        id: 65,
        name: "Eletric"
      }
    ]
  },
  {
    id: 65,
    name: "Togepi",
    types: [
      {
        id: 66,
        name: "Fairy"
      }
    ]
  },
]
```

### `COMING SOON`:
- delete a pokemon
- delete an user
- update pokemons and its types
