# Stein Schere Papier

## Installation

clone the repo

```
cd steinscherepapier
npm i
```

## Usage

```
npm start     # run it
npm run lint  # linting
npm test      # test
```

To access the game via REST use

```
curl -d '{"figure":"stein"}' -H "Content-Type: application/json" -X POST http://localhost:3000/game
```
