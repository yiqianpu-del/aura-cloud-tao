const PROJECT_ID = 'bar29scb';
const DATASET = 'production';
const API_VERSION = 'v2024-01-01';

export const sanityConfig = {
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VERSION,
};

export async function sanityFetch<T = any>(query: string, params?: Record<string, string>, tags?: string[]): Promise<T | null> {
  const encodedQuery = encodeURIComponent(query);
  const encodedParams = params
    ? '&' + Object.entries(params).map(([k, v]) => `$${k}=${encodeURIComponent(`"${v}"`)}`).join('&')
    : '';

  const url = `https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data/query/${DATASET}?query=${encodedQuery}${encodedParams}`;

  try {
    const res = await fetch(url, {
      next: tags ? { revalidate: 3600, tags } : { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn(`[Sanity] fetch failed (${res.status}): ${res.statusText}`);
      return null;
    }
    const json = await res.json();
    return json.result as T;
  } catch (err: any) {
    console.warn(`[Sanity] fetch error: ${err.message}`);
    return null;
  }
}
