import connectDb from '../../utils/connectDb'
import UserModel from '../../models/userModel'

connectDb()

export default function handdle(req, res) {
  const dataFromDb = async () => {
    const data = await UserModel.find({})
    console.log(data)
    res.status(200).send(data)
  }
  dataFromDb()
}
