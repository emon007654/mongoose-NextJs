import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)
