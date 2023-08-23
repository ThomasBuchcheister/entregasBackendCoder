// https://console.cloud.google.com
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import UserDao from '../daos/user.dao.js';
const userDao = new UserDao();

const strategyOptions = {
    clientID: '382414673819-cg3cv1tuol1vsgs891e9bk8qng95kqal.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/users/oauth2/redirect/accounts.google.com',
    scope: ['profile', 'email'],
    state: true
}

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
    console.log('PROFILE --> ', profile);
    const email = profile._json.email;
    const user = await userDao.getByEmail( email );
    if ( user ) return done( null, user );
    const newUser = await userDao.registerUser({
        first_name: profile._json.given_name,
        last_name: profile._json.family_name,
        email,
        password: '',
        isGoogle: true
    });
    return done(null, newUser);
};

passport.use('google', new GoogleStrategy(strategyOptions, registerOrLogin));

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((id, done)=>{
    done(null, id);
});