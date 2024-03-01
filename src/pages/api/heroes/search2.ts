import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  heroes: string[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ heroes: ['Batman', 'Superman', 'Ironman'] });
  // const result = await db.select().from(heroes).all();
  // console.log(result);
  // res.status(200).json({ heroes: result });
}
