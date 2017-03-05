import mongoose from 'mongoose'
import { userClaim, } from '../documents'

let userClaimSchema = mongoose.Schema(userClaim)
let UserClaim = mongoose.model('UserClaim', userClaimSchema)

export default UserClaim
