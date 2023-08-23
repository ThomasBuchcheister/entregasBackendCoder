import { createHash, isValidPassword } from "../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDao {
    async registerUser(user) {
        try {
            const { email, password } = user;
            const existUser = await this.getByEmail(email);
            console.log('existUser::', existUser);
            if(!existUser) {
                if(email === 'adminCoder@coder.com' && password === 'adminCod3r123'){
                    return await UserModel.create({...user, rol: 'admin', password: createHash(password)});
                }
                return await UserModel.create({...user, password: createHash(password)});
                
            } else return false;
        } catch (error) {
            console.log(error);
        }
    };

    async loginUser(user) {
        try {
            const { email, password } = user;
            const userExist = await this.getByEmail(email);
            if(userExist){
                const passValid = isValidPassword(userExist, password);
                if(!passValid) return false;
                else return userExist;

                // !passValid ? false : userExist
            } 
            else return false;
        } catch (error) {
            console.log(error);
        }
    };

    async getById(id){
        try {
            const userExist = await UserModel.findById(id);
            if(userExist){
                return userExist
            }else return false
        } catch (error) {
            console.log(error);
        }
    };

    async getByEmail(email){
        try {
            const userExist = await UserModel.findOne({email});
            if(userExist){
                return userExist
            }else return false
        } catch (error) {
            console.log(error);
        }
    }
}