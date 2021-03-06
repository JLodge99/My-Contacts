// Updates a contact.
// Must provide user_id and contact_id in route.
//
// Example send object:
// {
//     "contacts": {
//         "first_name": "Bob",
//         "last_name": "Smith",
//         "phone_number": "111-111-1111",
//         "email": "bob@email.com"
//     }
// }

const express = require('express');
const router = express.Router();
const controller = require('../controllers/update-ctrl');

router.post('/update/:user_id/:contact_id', controller.update);

module.exports = router;