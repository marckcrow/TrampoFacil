require('dotenv').config();
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const api = new ParseServer({
  databaseURI: process.env.SERVER_URL,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL,
});

app.use('/parse', api);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
