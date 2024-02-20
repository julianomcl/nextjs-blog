import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  console.log('hello')
  res.status(200).json({ text: 'Hello' })
}
