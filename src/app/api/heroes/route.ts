export const dynamic = 'force-dynamic'
import { db, statelessClient } from '@/lib/DB';
import { heroes } from '@/models';

export async function GET(request: Request) {
  console.log('GET /api/heroes');
  console.log('request', request);
  const result = await statelessClient.execute({
    sql : "SELECT rowid, distance FROM vss_colours WHERE vss_search(vector, '[0.000009, 0.000001, 0.9999123]') LIMIT 15;",
    args: [],
  });
  const serialized = JSON.stringify(result.rows.map((row) => ({
    ...row,
    rowid: row.rowid !== null ? row.rowid.toString() : "failed_parsing",
  })));
  return Response.json(
    JSON.parse(serialized),
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
