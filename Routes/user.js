import express from 'express';
import {register} from '../Controllers/user.js'
import {login} from '../Controllers/user.js'

const router=express.Router();


router.post('/register',register);

router.post('/login',login);

export default router;