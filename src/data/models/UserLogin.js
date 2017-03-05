import mongoose from 'mongoose'
import { userLogin, } from '../documents'

let userLoginSchema = mongoose.Schema(userLogin)
let UserLogin = mongoose.model('UserLogin', userLoginSchema)

export default UserLogin
