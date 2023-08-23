import UserDao from "../daos/user.dao.js";
const userDao = new UserDao();

export const registerUser = async(req, res, next) =>{
    try {
        res.json({
            msg: 'Register OK',
            session: req.session
        })
    } catch (error) {
        next(error.message)
    }
}

export const loginUser = async(req, res, next) =>{
    try {
        const user = await userDao.getById(req.session.passport.user);
        res.json({
            msg: 'Login OK',
            user
        })
    } catch (error) {
        
    }
}

export const githubResponse = async (req, res, next) => {
    try {
        const {first_name, last_name, email, isGithub} = req.user
        res.json({
            msg: 'register/login github OK',
            sesson: req.session,
            userData: {
                first_name,
                last_name, 
                email, 
                isGithub
            }
        })
    } catch (error) {
        next(error.message)
    }
}

export const googleResponse = async (req, res, next) => {
    try {
        const {first_name, last_name, email, isGoogle} = req.user
        res.json({
            msg: 'register/login google OK',
            sesson: req.session,
            userData: {
                first_name,
                last_name, 
                email, 
                isGoogle
            }
        })
    } catch (error) {
        next(error.message)
    }
}