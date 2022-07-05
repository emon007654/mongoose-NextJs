import connectDb from '../../utils/connectDb'
import UserModel from '../../models/userModel'

connectDb()

export default function handller(req, res) {
  const updatingData = async (uid) => {
    const result = await UserModel.findByIdAndUpdate(
      { _id: uid },
      { name: 'ispap' },
    )
    console.log(result)
  }
  updatingData('62c35be5b9313c18e5cd33de')
  res.status(200).send('data updated successfuly')
}
