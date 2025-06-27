import express from 'express'
import { createContact,getAllContacts } from '../Controllers/contact.js';

const router = express.Router();

router.post("/new", createContact);

router.get('/',getAllContacts);

export default router;