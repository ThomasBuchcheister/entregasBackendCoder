import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import UserDao from '../daos/user.dao.js';
const userDao = new UserDao();

const strategyOptions = {
    clientID:'Iv1.f6ffb590f5b4a5df',
    clientSecret:'ca4c4a3a0272494ff8c171a7b97e5549e35c4d33',
    callbackURL:'http://localhost:8080/users/profile-github'
};

const registerOrLogin = async(accesToken, refreshToken, profile, done)=>{
    // console.log('PROFILE -->', profile)

    const email = profile._json.email;
    const user = await userDao.getByEmail(email);
    if(user){
        return done(null, user)
    }

    const newUser = await userDao.registerUser({
        first_name: profile._json.name.split(' ')[0],
        last_name: profile._json.name.split(' ')[1],
        email: profile._json.email,
        password:'',
        isGithub: true
    })

    return done(null, newUser);
}

passport.use('github', new GithubStrategy(strategyOptions, registerOrLogin));