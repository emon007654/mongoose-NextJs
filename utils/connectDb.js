import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://localhost:27017/mydb'

const connectDb = async (err, res) => {
  const con = await mongoose.connect(MONGODB_URI)
  if (con) {
    console.log('connection successful')
  } else {
    console.log('failed')
  }
}

module.exports = connectDb
