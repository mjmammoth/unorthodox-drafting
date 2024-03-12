export const dynamic = 'force-dynamic'
import { statelessClient } from '@/lib/DB';
import { convertHexColorToCIELAB } from '@/utils/colourConversion';

export const runtime = "edge"

function bigintReplacer(key: string, value: any) {
  if (typeof value === 'bigint') {
    return Number(value);
  }
  return value;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const colour = url.searchParams.get('colour') || url.searchParams.get('color') || '';
  console.log('Colour:', colour);
  const vector = JSON.stringify(convertHexColorToCIELAB(colour));
  const limit = url.searchParams.get('limit') || '5';
  const sqlQuery = `
      SELECT 
          h.id,
          h.name,
          hc.dominance,
          v.distance
      FROM (
          SELECT rowid, distance
          FROM vss_colours
          WHERE vss_search(vector, ?)
          LIMIT ?
      ) as v
      JOIN hero_colours hc ON v.rowid = hc.colour_id
      JOIN heroes h ON hc.hero_id = h.id
      GROUP BY h.name, v.distance, hc.dominance
      ORDER BY hc.dominance, v.distance
  `;

  const result = await statelessClient.execute({
    sql : sqlQuery,
    args: [vector, limit],
  });
  result.rows.forEach((row) => {
    console.log('Row:', JSON.stringify(row, bigintReplacer));
  });
  const serialized = result.rows.map((row) => row.id !== null ? Number(row.id) : 0);
  let seen = new Set();
  const dedupedNumbers = serialized.filter(number => {
    if (seen.has(number)) {
      return false;
    } else {
      seen.add(number);
      return true;
    }
  });
  return Response.json(
    dedupedNumbers,
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
}
