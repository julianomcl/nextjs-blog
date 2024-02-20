import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  console.log('hello world 2')

  res.status(200).json({ text: 'Hello' })
}
