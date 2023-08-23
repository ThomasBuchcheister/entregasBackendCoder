import {dirname} from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));

import { hashSync, compareSync, genSaltSync } from 'bcrypt';

/**
 * Metodo que recibe password y retorna hasheada
 * @param {*} password string
 * @returns password hashed
 * @example
 * createHash('1234')
*/

export const createHash = (password) => hashSync(password, genSaltSync(10));

export const isValidPassword = (user, password) => compareSync(password, user.password);