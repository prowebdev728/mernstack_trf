import mongoose from 'mongoose'
import { userProfile, } from '../documents'

let userProfileSchema = mongoose.Schema(userProfile)
let UserProfile = mongoose.model('UserProfile', userProfileSchema)

export default UserProfile
