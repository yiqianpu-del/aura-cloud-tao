const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aaarojtl';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2024-01-01';

export const sanityConfig = { projectId, dataset, apiVersion };

export async function sanityFetch<T = any>(query: string, params?: Record<string, string>, tags?: string[]): Promise<T | null> {
  const encodedQuery = encodeURIComponent(query);
  const encodedParams = params
    ? '&' + Object.entries(params).map(([k, v]) => `$${k}=${encodeURIComponent(`"${v}"`)}`).join('&')
    : '';

  const url = `https://${projectId}.api.sanity.io/${apiVersion}/data/query/${dataset}?query=${encodedQuery}${encodedParams}`;

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
