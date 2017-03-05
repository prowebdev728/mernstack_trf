import mongoose from 'mongoose'
import { databaseUrl, authDb, } from '../config'
import { technologies, } from '../data/masterdata'
import { Technology, } from '../data/models'

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + databaseUrl)
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected')
})

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})

const init = () => {
  mongoose.connect(databaseUrl, { auth: { authdb: authDb, }, })

  insertOrUpdate(Technology, technologies)
}

const insertOrUpdate = (model, documents) => {
  documents.forEach((document) => model.findOneAndUpdate(document, document, { upsert: true, }, (err) => {
    if (err) {
      throw new Error('Error loding data into database')
    }
  }))
}

const db = {
  init,
}

export default db
