/**
 * Real-world [longitude, latitude] centers for each wine region.
 * Consumed by RegionMap to project pins onto accurate country outlines.
 */
export const REGION_COORDS: Record<string, [number, number]> = {
  // Italy
  "piedmont": [8.0, 44.7],
  "valle-daosta": [7.3, 45.7],
  "lombardy": [10.0, 45.5],
  "trentino-alto-adige": [11.3, 46.3],
  "friuli": [13.3, 45.9],
  "veneto": [11.5, 45.5],
  "liguria": [9.4, 44.2],
  "emilia-romagna": [11.3, 44.5],
  "tuscany": [11.3, 43.4],
  "lazio": [12.5, 41.9],
  "molise": [14.7, 41.7],
  "abruzzo": [14.0, 42.3],
  "le-marche": [13.2, 43.4],
  "umbria": [12.5, 43.0],
  "campania": [14.8, 40.9],
  "puglia": [17.2, 40.9],
  "basilicata": [16.0, 40.6],
  "calabria": [16.4, 39.0],
  "sardinia": [9.1, 40.1],
  "sicily": [14.0, 37.6],

  // France
  "medoc": [-0.85, 45.25],
  "pauillac": [-0.75, 45.20],
  "saint-julien": [-0.75, 45.15],
  "margaux": [-0.68, 45.05],
  "saint-estephe": [-0.77, 45.28],
  "pessac-leognan": [-0.60, 44.75],
  "sauternes": [-0.35, 44.55],
  "saint-emilion": [-0.15, 44.90],
  "pomerol": [-0.20, 44.93],
  "entre-deux-mers": [-0.25, 44.75],
  "chablis": [3.80, 47.82],
  "cote-de-nuits": [4.95, 47.20],
  "cote-de-beaune": [4.83, 47.02],
  "cote-chalonnaise": [4.75, 46.72],
  "maconnais": [4.80, 46.30],
  "beaujolais": [4.70, 46.10],

  // California
  "mendocino": [-123.4, 39.0],
  "sonoma-coast": [-122.95, 38.42],
  "russian-river": [-122.85, 38.55],
  "napa-valley": [-122.35, 38.50],
  "lodi-sierra": [-121.0, 38.15],
  "santa-cruz": [-122.0, 37.10],
  "monterey": [-121.30, 36.40],
  "paso-robles": [-120.70, 35.62],
  "santa-barbara": [-120.10, 34.72],
};
