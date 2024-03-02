// import { NextApiRequest, NextApiResponse } from 'next';
// import { rgbToLuv } from '../../../utils/colourConversion';
// import { db } from '@/db/LibSQLDatabase';
//
// type ResponseData = {
//   heroes: string[]
// }
//
// export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
//   res.setHeader('Content-Type', 'application/json');
//   if (req.method === 'GET') {
//     try {
//       await db.connect();
//       const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 5;
//
//       const colorParam: string = req.query.color as string;
//       const colourParam: string = req.query.colour as string;
//       const colour: string = colorParam || colourParam;
//       const colour_rgb: number[] = colour.split(',').map(Number);
//       const colour_luv: number[] = rgbToLuv(colour_rgb);
//       const embedding = JSON.stringify(colour_luv);
//       const sqlQuery = `
//           SELECT 
//               h.hero_name, 
//               v.distance,
//               hc.dominance,
//               CASE 
//                   when hc.dominance = 'primary' then 1
//                   when hc.dominance = 'secondary' then 2
//                   when hc.dominance = 'tertiary' then 3
//                   else 4 -- for any unexpected value
//               END AS dominance_weight
//           FROM (
//               SELECT rowid, distance
//               FROM vss_colours
//               WHERE vss_search(luv_vector, ?)
//               LIMIT ?
//           ) as v
//           JOIN hero_colours hc ON v.rowid = hc.colour_id
//           JOIN heroes h ON hc.hero_id = h.id
//           GROUP BY h.hero_name, v.distance, hc.dominance
//           ORDER BY dominance_weight, v.distance
//       `;
//       const heroes = await db.query<any[]>(sqlQuery, [embedding, limit]);
//
//       // const heroNames = heroes.map((hero) => hero.hero_name);
//       res.status(200).json(heroes);
//     } catch (error) {
//       res.status(500).json({ message: 'Error accessing the database', error: error.message });
//     } finally {
//       await db.disconnect();
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
