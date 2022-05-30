const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/db/sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(cors())
    .use(bodyParser.json());

//sequelize.initDb();

require('./src/routes/findAllPokemons')(app);
require('./src/routes/findPokemonByPk')(app);
require('./src/routes/createPokemon')(app);
require('./src/routes/updatePokemon')(app);
require('./src/routes/deletePokemon')(app);
require('./src/routes/login')(app);

app.get('/', (req, res) => res.send('Hello word!'));

app.listen(PORT, () => console.log(`Application démarré sur http://localhost:${ PORT }`));