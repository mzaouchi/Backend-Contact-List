const express = require('express');
const { AddContact, ShowContacts, DeleteContact, UpdateContact, ShowContactByID } = require('../controllers/ilen');
const route = express.Router();


route.post('/',AddContact);

route.get('/', ShowContacts);

route.delete('/:id', DeleteContact);

route.put('/:id', UpdateContact);

route.get('/:id', ShowContactByID);

module.exports = route;