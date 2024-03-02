export const dynamic = 'force-dynamic'
import { NextRequest, NextResponse } from 'next';

type ResponseData = {
  heroes: string[]
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200).json({ heroes: ['Batman', 'Superman', 'Ironman'] });
//   // const result = await db.select().from(heroes).all();
//   // console.log(result);
//   // res.status(200).json({ heroes: result });
// }

export async function GET(request: Request) {
  console.log('GET /api/heroes');
  console.log('request', request);
  return Response.json(
    { heroes: ['Batman', 'Superman', 'Ironman'] },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
