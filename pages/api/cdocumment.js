const connectDb = require('../../utils/connectDb')
const UserModel = require('../../models/userModel')

connectDb()

export default function handler(req, res) {
  const User = UserModel({
    name: 'emon',
  })
  User.save()
  console.log(User)

  res.status(200).send(User.name)
}
