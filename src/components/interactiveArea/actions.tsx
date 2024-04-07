"use server"

import { statelessClient } from '@/lib/DB';
import { convertHexColorToCIELAB } from '@/utils/colourConversion';

export async function search(filters: any) {
  console.log('Searching with filters:', filters);
  const { hexColour } = filters;
  const labColourVector = JSON.stringify(convertHexColorToCIELAB(hexColour));
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
        LIMIT 5
    ) as v
    JOIN hero_colours hc ON v.rowid = hc.colour_id
    JOIN heroes h ON hc.hero_id = h.id
    GROUP BY h.name, v.distance, hc.dominance
    ORDER BY hc.dominance, v.distance
  `;
  const result = await statelessClient.execute({
    sql : sqlQuery,
    args: [labColourVector],
  });
  console.log('Search result:', result); 
  const serialized = result.rows.map((row) => row.id !== null ? Number(row.id) : 0);
  console.log('Serialized:', serialized);

  // This should be handled in the sql but for now we'll just filter out the duplicates
   let seen = new Set();
  const dedupedNumbers = serialized.filter(number => {
    if (seen.has(number)) {
      return false;
    } else {
      seen.add(number);
      return true;
    }
  });

  return dedupedNumbers;
}
  
