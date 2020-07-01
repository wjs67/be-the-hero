const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, '192.168.1.113');

console.log('Node server em 192.168.1.113:3001');
