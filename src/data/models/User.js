import mongoose from 'mongoose'
import { user, } from '../documents'

let userSchema = mongoose.Schema(user)
let User = mongoose.model('User', userSchema)

export default User
