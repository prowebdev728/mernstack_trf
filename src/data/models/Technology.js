import mongoose from 'mongoose'
import { technology, } from '../documents'

let technologySchema = mongoose.Schema(technology)
let Technology = mongoose.model('Technology', technologySchema)

export default Technology
