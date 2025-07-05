import express from 'express'
import { createContact,deleteContactById,getAllContacts,getContactById, updateContactById } from '../Controllers/contact.js';

const router = express.Router();

router.post("/new", createContact);

router.get('/',getAllContacts);

router.get('/:id',getContactById);

router.put('/:id',updateContactById);

router.delete('/:id',deleteContactById);


export default router;