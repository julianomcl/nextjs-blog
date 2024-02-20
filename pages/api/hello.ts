import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  console.log('hello world 2')

  console.log('hello world 3')

  res.status(200).json({ text: 'Hello' })
}
