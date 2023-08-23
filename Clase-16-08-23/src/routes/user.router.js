import { Router } from "express";
import { loginUser, registerUser, githubResponse, googleResponse } from "../controllers/user.controllers.js";
import passport from "passport";
const router = Router();



router.post('/register', passport.authenticate('register'), registerUser);
router.post('/login', passport.authenticate('login'),loginUser);

router.get('/register-github', passport.authenticate('github', {scope:['user:email']}));

router.get('/profile-github', passport.authenticate('github', {scope:['user:email']}), githubResponse);

router.get('/oauth2/redirect/accounts.google.com', passport.authenticate('google', {assignProperty: 'user'}), googleResponse)

export default router;